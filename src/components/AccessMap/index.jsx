import React, { useState, useEffect } from "react";
import Image from "next/image";
import TitleLeftLine from "../TitleLeftLine";
import CenteredLayoutContainer from "../CenteredLayoutContainer";

const AccessMap = () => {
  return (
    <section id="access-map">
      <CenteredLayoutContainer>
        {/* タイトル */}
        <div className="mb-5">
          <TitleLeftLine title="アクセスマップ" />
        </div>

        {/* 会社情報（row-col構造） */}
        <div className="company-info mb-5">
          {/* 会社名 */}
          <div className="row info-row py-3">
            <div className="col-md-3">
              <div className="info-label">会社名</div>
            </div>
            <div className="col-md-9">
              <div className="info-content">THE WHY HOW DO COMPANY株式会社</div>
            </div>
          </div>

          {/* 所在地 */}
          <div className="row info-row py-3">
            <div className="col-md-3">
              <div className="info-label">所在地</div>
            </div>
            <div className="col-md-9">
              <div className="info-content">
                〒160-0005 東京都新宿区愛住町22 第3山田ビル
                <br />
                <div
                  className="mt-2 external-link"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <a
                    href="https://maps.app.goo.gl/PNPJKRkbyukUTRka9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    Google Map
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 電話番号 */}
          <div className="row info-row py-3">
            <div className="col-md-3">
              <div className="info-label">電話番号</div>
            </div>
            <div className="col-md-9">
              <div className="info-content">03-4405-5460</div>
            </div>
          </div>

          {/* FAX */}
          <div className="row info-row py-3">
            <div className="col-md-3">
              <div className="info-label">FAX</div>
            </div>
            <div className="col-md-9">
              <div className="info-content">03-4405-6048</div>
            </div>
          </div>

          {/* 交通 */}
          <div className="row info-row py-4">
            <div className="col-md-3">
              <div className="info-label">交通</div>
            </div>
            <div className="col-md-9">
              <div className="info-content">
                <div className="mb-4">
                  <Image
                    src="/img/map.png"
                    alt="アクセスマップ"
                    width={480}
                    height={360}
                    className="img-fluid rounded"
                  />
                </div>

                <div className="d-flex align-items-start mb-3">
                  <span className="station-mark shinjuku-line me-2"></span>
                  <div>
                    <strong>都営新宿線 曙橋駅</strong>
                    <br />
                    A1出口より徒歩約4分
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <span className="station-mark marunouchi-line me-2"></span>
                  <div>
                    <strong>東京メトロ 丸ノ内線 四谷三丁目駅</strong>
                    <br />
                    2番出口より徒歩約8分
                  </div>
                </div>

                <div className="mt-3">
                  <p className="landmark-note mb-0">
                    ＊ニチイキッズ曙橋保育園すぐ左に入り口がございます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </CenteredLayoutContainer>

      <style>{`
        .company-info {
          /* color: #333; */
        }

        .info-row {
          border-bottom: 1px dotted #ccc;
        }

        .info-label {
          font-weight: 500;
          /* color: #555; */
        }

        .info-content {
          /* color: #333; */
        }

        .map-link {
          text-decoration: none;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
        }

        .map-link:hover {
          text-decoration: underline;
        }

        .station-mark {
          display: inline-block;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .shinjuku-line {
          background-color: #b0bf1e;
          width: 14px;
          height: 14px;
        }

        .marunouchi-line {
          background-color: #e60012;
          width: 14px;
          height: 14px;
        }

        .landmark-note {
          color: #fff;
          font-size: 0.95rem;
        }

        @media (max-width: 767px) {
          .info-label {
            margin-bottom: 0.5rem;
          }

          .info-row {
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
          }
        }

        @media print {
          .btn-curve {
            display: none;
          }

          .info-row {
            break-inside: avoid;
          }
        }
      `}</style>
    </section>
  );
};

export default AccessMap;
