import React, { useState, useEffect } from "react";
import Image from "next/image";
import TitleLeftLine from "../TitleLeftLine";

const AccessMap = () => {
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
          <div
            className="pt-32"
            style={{ maxWidth: "640px", margin: "0 auto" }}
          >
            <div className="pt-16 pb-16">
              <TitleLeftLine title="アクセスマップ" />
            </div>
            <Image
              src="/img/map.png"
              alt="アクセスマップ"
              width={640}
              height={480}
              layout="responsive"
            />

            <div id="accessData" className="pt-16 text-left">
              <ul className="text-lg">
                <li>〒 160-0005</li>
                <li>東京都新宿区愛住町22 第3山田ビル</li>
                <li>TEL : 03-4405-5460</li>
                <li>FAX : 03-4405-6048</li>
                <br />
                <li>【交通】</li>
                <li>
                  都営新宿線 曙橋駅（A1出口より徒歩約4分）
                  <br />
                  東京メトロ 丸ノ内線 四谷三丁目駅（2番出口より徒歩約8分）
                </li>
                <li>＊ニチイキッズ曙橋保育園すぐ左に入り口がございます。</li>
              </ul>
            </div>

            <aside id="buttonSet" className="pt-16 text-center">
              <button
                id="printStart"
                className="bg-primary text-white"
                onClick={handlePrint}
              >
                印刷する
              </button>
            </aside>
          </div>
        </div>
      </div>

      <style jsx>{`
        .width100 {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
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
