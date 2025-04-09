import React, { useState, useEffect } from "react";
import Link from "next/link";
import Split from "../Split";

// announcement_top.js を移植したもの
const NewsAnnouncement = ({ limit = 3 }) => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState('0'); // 0は「最新1年分」

  useEffect(() => {
    // データを取得する関数
    const fetchNewsData = async () => {
      try {
        setLoading(true);
        
        // EIR-PartsのJSONPを直接使用するのではなく、プロキシAPIを経由
        const response = await fetch('/api/news-data');
        const data = await response.json();
        
        if (!data || !data.item || !data.item_count) {
          throw new Error('データの形式が不正です');
        }
        
        // 年度でフィルタリング
        let filteredItems = [];
        if (selectedYear === '0') {
          // 最新1年分
          const oneYearAgo = new Date();
          oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
          
          filteredItems = data.item.filter(item => {
            const itemDate = new Date(item.date);
            return itemDate >= oneYearAgo;
          });
        } else {
          // 特定の年
          filteredItems = data.item.filter(item => 
            item.date.substr(0, 4) === selectedYear
          );
        }
        
        // 表示数を制限
        filteredItems = filteredItems.slice(0, limit);
        
        // カテゴリ名を日本語に変換
        const formattedItems = filteredItems.map(item => {
          let category;
          
          switch(item.news_type) {
            case 'yuho':
              category = '有価証券報告書';
              break;
            case 'press':
              category = '適時開示';
              break;
            case 'tanshin':
              category = '決算短信';
              break;
            case 'pr':
              category = 'プレスリリース';
              break;
            case 'announcement':
              category = 'お知らせ';
              break;
            case 'ir_material_for_fiscal_ym':
              category = 'IR資料';
              break;
            default:
              category = 'インフォメーション';
          }
          
          // 新着フラグを7日以内のアイテムに設定
          const isNew = isNewItem(item.date);
          
          return {
            date: item.format_date,
            category,
            content: item.title,
            url: item.link,
            isNew
          };
        });
        
        setNewsItems(formattedItems);
        setLoading(false);
      } catch (err) {
        console.error('ニュースデータの取得に失敗しました:', err);
        setError('データの取得に失敗しました');
        setLoading(false);
      }
    };
    
    fetchNewsData();
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
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-5">
                <div className="d-flex align-items-center">
                  <div
                    className="info-date font-weight-medium"
                    style={{ marginRight: "16px" }}
                  >
                    {item.date}
                  </div>
                  <div
                    className="info-category badge bg-light text-dark py-1 px-2"
                    style={{ 
                      minWidth: "80px", 
                      fontSize: "10px",
                      display: "inline-block",
                      borderRadius: "0.25rem"
                    }}
                  >
                    {item.category}
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-sm-7 d-flex align-items-center">
                <div className="info-content w-100">
                  <Split>
                    <Link href={item.url} target="_blank">
                      <a
                        className="info-link text-sm text-white wow words chars splitting"
                        data-splitting
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.content}
                      </a>
                    </Link>
                  </Split>
                  {item.isNew && (
                    <div className="new-badge d-flex align-items-center">
                      <span className="badge badge-danger badge-pill">
                        <i className="fas fa-chevron-right fa-xs"></i>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsAnnouncement;