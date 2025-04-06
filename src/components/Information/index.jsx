import React from "react";
import Link from "next/link";
import TitleLeftLine from "../TitleLeftLine";
import Split from "../Split";
import SpotlightCard from "../reactbits/ui/SpotlightCard/SpotlightCard";

const Information = () => {
  const newsItems = [
    {
      date: "2025/04/01",
      category: "プレスリリース",
      content:
        "氷川きよし with t.komuro 新曲「Party of Monsters」 テレビアニメ「ゲゲゲの鬼太郎 私の愛した歴代ゲゲゲ」 エンディングテーマに決定",
      url: "https://ssl4.eir-parts.net/doc/3823/tdnet/2588312/00.pdf",
    },
    {
      date: "2025/03/28",
      category: "プレスリリース",
      content:
        "産業機械シェアリングエコノミー・プラットフォームEkuipp株式会社の営業代理権取得のお知らせ",
      url: "https://ssl4.eir-parts.net/doc/3823/tdnet/2586719/00.pdf",
    },
    {
      date: "2025/03/25",
      category: "適時開示",
      content:
        "子会社の異動（株式譲渡）及び事業の廃止並びに資金使途の変更に関するお知らせ",
      url: "https://ssl4.eir-parts.net/doc/3823/tdnet/2584596/00.pdf",
    },
  ];

  return (
    <section className="info-section pt-32 pb-32">
      <div className="container">
        <div className="row justify-content-between mb-24">
          <div className="col-md-6">
            <Split>
              <TitleLeftLine title="新着情報" />
            </Split>
          </div>
          <div className="col-md-6 text-md-end">
            <Split>
              <span
                className="info-subtitle wow words chars splitting"
                data-splitting
              >
                WHAT&apos;S NEW
              </span>
            </Split>
          </div>
        </div>

        <div className="pt-16">
          <SpotlightCard className="wow fadeInUp">
            <div className="info-items">
              {newsItems.map((item, index) => (
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
                          className="info-category badge badge-light py-1 px-2"
                          style={{ minWidth: "80px", fontSize: "10px" }}
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
                        <div className="new-badge d-flex align-items-center">
                          <span className="badge badge-danger badge-pill">
                            <i className="fas fa-chevron-right fa-xs"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-32">
              <Link href="https://www.twhdc.co.jp/ir/news/index.html">
                <a
                  className="btn-curve btn-lit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>更新情報一覧&nbsp;&nbsp;</span>
                  <span className="badge badge-danger badge-pill">
                    <i className="fas fa-chevron-right fa-xs"></i>
                  </span>
                </a>
              </Link>
            </div>
          </SpotlightCard>
        </div>
      </div>

      <style jsx>{`
        .info-section {
          background: transparent;
        }

        .info-subtitle {
          color: #999;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .info-item {
          border-bottom: 1px dotted #ddd;
          transition: all 0.3s ease;
        }

        .info-date {
          font-weight: 500;
        }

        .info-category {
          font-size: 12px;
          background: #f5f5f5;
          color: #666;
        }

        .info-content {
          position: relative;
          padding-right: 20px;
        }

        .info-link {
          color: #333;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .info-link:hover {
          color: #e62e2e;
        }

        .new-badge {
          position: absolute;
          right: 0;
          top: 5px;
        }

        @media (max-width: 767px) {
          .info-date,
          .info-category {
            margin-bottom: 4px;
          }

          .info-content {
            margin-top: 4px;
          }
        }
      `}</style>
    </section>
  );
};

export default Information;
