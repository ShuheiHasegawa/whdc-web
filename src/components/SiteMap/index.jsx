import React from "react";
import Link from "next/link";

const SiteMap = () => {
  return (
    <div className="sitemap-section">
      <style jsx>{`
        .sitemap-section {
          padding: 40px 0;
          padding-bottom: 0;
        }

        .siteMapFlex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        @media screen and (max-width: 768px) {
          .siteMapFlex {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
        }
      `}</style>

      <ul className="siteMapFlex">
        <li>
          <Link href="/company">
            <a className="custom-link">社長メッセージ</a>
          </Link>
        </li>
        <li>
          <Link href="/company/philosophy">
            <a className="custom-link">企業憲章</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="custom-link">ワイハウの10の特徴</a>
          </Link>
        </li>
        <li>
          <Link href="/company">
            <a className="custom-link">会社情報</a>
          </Link>
        </li>
        <li>
          <Link href="/accessmap">
            <a className="custom-link">アクセスマップ</a>
          </Link>
        </li>
        <li>
          <Link href="/privacy_policy">
            <a className="custom-link">プライバシーポリシー</a>
          </Link>
        </li>
        <li>
          <Link href="/notice">
            <a className="custom-link">ご利用にあたって</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="custom-link">お問い合わせ</a>
          </Link>
        </li>
        {/* <li>
          <a
            href="https://www.twhdc.co.jp/media/"
            className="custom-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Choice For Life
          </a>
        </li> */}
        {/* <li>
          <Link href="/english">
            <a className="custom-link">English</a>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default SiteMap;
