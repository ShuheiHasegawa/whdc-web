import React, { useState, useEffect } from "react";
import Link from "next/link";
import Split from "../Split";

// announcement_top.js を移植したもの
// yarn export でビルドするために、index_nextjs_api.jsx を修正したもの
const NewsAnnouncement = ({ limit = 3 }) => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState("0"); // 0は「最新1年分」

  useEffect(() => {
    // JSONP形式のスクリプトを読み込む関数
    const loadEIRScript = () => {
      // グローバルコールバック関数を定義
      window.eolparts_announcement_7 = (data) => {
        handleNewsData(data);
      };

      // スクリプトタグを作成
      const script = document.createElement("script");
      script.src =
        "//ssl4.eir-parts.net/V4Public/EIR/3823/ja/announcement/announcement_7.js";
      script.charset = "UTF-8";
      script.async = true;
      script.onerror = () => {
        setError("データの取得に失敗しました");
        setLoading(false);
      };

      // DOMに追加
      document.body.appendChild(script);

      // クリーンアップ関数
      return () => {
        document.body.removeChild(script);
        delete window.eolparts_announcement_7;
      };
    };

    // データを処理する関数
    const handleNewsData = (data) => {
      try {
        if (!data || !data.item || !data.item_count) {
          throw new Error("データの形式が不正です");
        }

        // 年度でフィルタリング
        let filteredItems = [];
        if (selectedYear === "0") {
          // 最新1年分
          const oneYearAgo = new Date();
          oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

          filteredItems = data.item.filter((item) => {
            const itemDate = new Date(item.date);
            return itemDate >= oneYearAgo;
          });
        } else {
          // 特定の年
          filteredItems = data.item.filter(
            (item) => item.date.substr(0, 4) === selectedYear
          );
        }

        // 表示数を制限
        filteredItems = filteredItems.slice(0, limit);

        // カテゴリ名を日本語に変換
        const formattedItems = filteredItems.map((item) => {
          let category;

          switch (item.news_type) {
            case "yuho":
              category = "有価証券報告書";
              break;
            case "press":
              category = "適時開示";
              break;
            case "tanshin":
              category = "決算短信";
              break;
            case "pr":
              category = "プレスリリース";
              break;
            case "announcement":
              category = "お知らせ";
              break;
            case "ir_material_for_fiscal_ym":
              category = "IR資料";
              break;
            default:
              category = "インフォメーション";
          }

          // 新着フラグを7日以内のアイテムに設定
          const isNew = isNewItem(item.date);

          return {
            date: item.format_date,
            category,
            content: item.title,
            url: item.link,
            isNew,
          };
        });

        setNewsItems(formattedItems);
        setLoading(false);
      } catch (err) {
        console.error("ニュースデータの処理に失敗しました:", err);
        setError("データの処理に失敗しました");
        setLoading(false);
      }
    };

    // クライアントサイドでのみ実行
    if (typeof window !== "undefined") {
      const cleanupFn = loadEIRScript();
      return cleanupFn;
    }
  }, [selectedYear, limit]);

  // 7日以内の新着アイテムかどうかを判定
  const isNewItem = (dateStr) => {
    const itemDate = new Date(dateStr);
    const now = new Date();
    const diffTime = now - itemDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  if (loading) return <div className="text-center p-4">読み込み中...</div>;
  if (error) return <div className="text-center p-4 text-danger">{error}</div>;

  return (
    <div className="info-items">
      {newsItems.length === 0 ? (
        <div className="info-item pt-4 pb-2">掲載情報はございません</div>
      ) : (
        newsItems.map((item, index) => (
          <div key={index} className="info-item pt-4 pb-2">
            <Link href={item.url}>
              <a
                className="d-block text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="d-flex flex-column flex-md-row align-items-md-center">
                  <div className="d-flex mb-2 mb-md-0">
                    <div
                      style={{ width: "100px", flexShrink: 0 }}
                      className="info-date font-weight-medium me-2 text-white"
                    >
                      {item.date}
                    </div>
                    <div
                      className="info-category badge bg-light text-dark py-2 px-1 me-3"
                      style={{
                        width: "100px",
                        fontSize: "10px",
                        display: "inline-block",
                        borderRadius: "0.25rem",
                        flexShrink: 0,
                        textAlign: "center",
                      }}
                    >
                      {item.category}
                    </div>
                  </div>
                  <div className="info-content flex-grow-1">
                    <Split>
                      <span
                        className="info-link text-sm text-white wow words chars splitting"
                        data-splitting
                      >
                        {item.content}
                      </span>
                    </Split>
                    <div className="new-badge d-flex align-items-center">
                      <span className="badge badge-danger badge-pill">
                        <i className="fas fa-chevron-right fa-xs"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsAnnouncement;
