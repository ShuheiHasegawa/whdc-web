import React, { useState, useEffect } from "react";
import Image from "next/image";

const AccessMap = () => {
  const [shouldShowOldMap, setShouldShowOldMap] = useState(false);
  const [shouldShowNewMap, setShouldShowNewMap] = useState(false);

  // 日付による表示切り替えのロジック
  useEffect(() => {
    const now = new Date();
    const endDate = new Date("2021/12/31 23:59:59");
    const startDate = new Date("2022/1/1 00:00:00");

    setShouldShowOldMap(now <= endDate);
    setShouldShowNewMap(now >= startDate);
  }, []);

  // 印刷機能
  const handlePrint = () => {
    const footerElement = document.getElementById("footerOutPut");
    const printButton = document.getElementById("printStart");

    if (footerElement) footerElement.style.display = "none";
    if (printButton) printButton.style.display = "none";

    window.print();

    setTimeout(() => {
      if (footerElement) footerElement.style.display = "block";
      if (printButton) printButton.style.display = "block";
    }, 200);
  };

  return (
    <main id="top">
      <div id="printTarget">
        <div id="printBox" className="width100">
          {shouldShowOldMap && (
            <Image
              src="/img/map.png"
              alt="アクセスマップ"
              width={800}
              height={600}
              layout="responsive"
            />
          )}
          {shouldShowNewMap && (
            <Image
              src="/img/map.png"
              alt="アクセスマップ"
              width={800}
              height={600}
              layout="responsive"
            />
          )}
        </div>

        <div id="accessData" className="left">
          <ul className="fontSize20">
            <li>〒 160-0005</li>
            <li>東京都新宿区愛住町22 第3山田ビル</li>
            <li>TEL : 03-4405-5460</li>
            <li>FAX : 03-4405-6048</li>
            <li>【交通】</li>
            <li>
              都営新宿線 曙橋駅（A1出口より徒歩約4分）
              <br />
              東京メトロ 丸ノ内線 四谷三丁目駅（2番出口より徒歩約8分）
            </li>
            <li>＊ニチイキッズ曙橋保育園すぐ左に入り口がございます。</li>
          </ul>
        </div>

        <aside id="buttonSet">
          <button
            id="printStart"
            className="bgHighBlue white fontSize26"
            onClick={handlePrint}
          >
            印刷する
          </button>
        </aside>
      </div>

      <style jsx>{`
        .width100 {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .left {
          text-align: left;
          padding: 2rem;
        }

        .fontSize20 {
          font-size: 20px;
          list-style: none;
          padding: 0;
        }

        .fontSize20 li {
          margin-bottom: 1rem;
        }

        .bgHighBlue {
          background-color: #0066cc;
        }

        .white {
          color: white;
        }

        .fontSize26 {
          font-size: 26px;
        }

        #buttonSet {
          text-align: center;
          margin: 2rem 0;
        }

        #printStart {
          padding: 1rem 2rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: opacity 0.3s;
        }

        #printStart:hover {
          opacity: 0.8;
        }

        @media print {
          #buttonSet {
            display: none;
          }
        }
      `}</style>
    </main>
  );
};

export default AccessMap;
