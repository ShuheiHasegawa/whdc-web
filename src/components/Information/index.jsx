import React from "react";
import Link from "next/link";
import TitleLeftLine from "../TitleLeftLine";
import Split from "../Split";
import SpotlightCard from "../reactbits/ui/SpotlightCard/SpotlightCard";
import NewsAnnouncement from "../NewsAnnouncement";
import Button from "../Button";

const Information = () => {
  return (
    <section className="info-section pt-32 pb-32">
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
          <NewsAnnouncement limit={3} />

          <div className="text-center pt-24">
            <Button
              href="/news/ir/news/index.html"
              text="ニュース一覧"
              newTab={true}
            />
          </div>
        </SpotlightCard>
      </div>

      <style>{`
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
