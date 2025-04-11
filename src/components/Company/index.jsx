import React from "react";
import Link from "next/link";
import HeroImage from "../HeroImage";
import TitleLeftLine from "../TitleLeftLine";
import Split from "../Split";
import CenteredLayoutContainer from "../CenteredLayoutContainer";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import { historyData } from "./historyData";
import Dashed2Column from "../Dashed2Column";

const CompanyPage = () => {
  const companyInfoItems = [
    {
      title: "会社名",
      content:
        "THE WHY HOW DO COMPANY株式会社（英文名 THE WHY HOW DO COMPANY, Inc.）",
    },
    {
      title: "本社",
      content: (
        <>
          〒160-0005 東京都新宿区愛住町22 第3山田ビル <br />
          <div className="mt-2">
            TEL：03-4405-5460（代表）
            <br />
            FAX：03-4405-6048
          </div>
        </>
      ),
    },
    {
      title: "設立",
      content: "2004年7月12日",
    },
    {
      title: "代表者",
      content: "代表取締役社長 岩尾 俊兵",
    },
    {
      title: "資本金",
      content: "1,617百万円（2024年8月31日現在）",
    },
    {
      title: "売上高",
      content: "747百万円［連結］（2024年8月期）",
    },
    {
      title: "従業員数",
      content: "31名 [連結]（2024年8月期）",
    },
    {
      title: "事業内容",
      content: (
        <>
          次の事業を営むこと及び次の事業を営む会社等事業体の株式または持分を所有することによる事業活動の管理
          <ul className="mt-2">
            <li>・スマートフォン向けサービス及びソリューションの提供</li>
            <li>・コンピュータに関する個人及び企業への教育</li>
            <li>・不動産賃貸（サブリースを含む）</li>
            <li>
              ・コンサート、演劇、演芸、講演、スポーツ等各種イベントの企画、制作、興行
            </li>
            <li>・知的財産権の管理、販売及び使用許諾等</li>
            <li>・産業廃棄物及び一般廃棄物の再資源化処理物の販売</li>
            <li>・その他</li>
          </ul>
        </>
      ),
    },
    {
      title: "主要取引銀行",
      content:
        "城南信用金庫、みずほ銀行 中目黒支店、三井住友銀行 渋谷支店、三菱UFJ銀行 新橋支店",
    },
    {
      title: "グループ会社",
      content:
        "WHDCアクロディア株式会社、株式会社渋谷肉横丁、株式会社インタープラン、WHDCエンタテインメント株式会社、GUAM ENTERTAINMENT SYSTEMS, LLC 、株式会社SOUND PORT、Pavilions株式会社、株式会社宇部整環リサイクルセンター",
    },
  ];

  // 沿革データを整形する関数
  const historyItems = (historyData) => {
    return historyData.map((item) => ({
      title: (
        <span>
          <span style={{ display: "inline-block", width: "3.6em" }}>
            {item.year}年
          </span>
          <span
            style={{
              display: "inline-block",
              width: "2em",
              textAlign: "right",
            }}
          >
            {item.month}
          </span>
          月
        </span>
      ),
      content: item.content,
    }));
  };

  return (
    <section id="company">
      <HeroImage
        src="/img/whdc/company/firstview_02_2022.png"
        alt="firstview_about"
        objectFit="cover"
        priority
      />

      <CenteredLayoutContainer>
        <SectionTitle title="ABOUT" />

        {/* 会社情報 */}
        <section id="info" className="container">
          <Split>
            <TitleLeftLine title="会社情報" />
          </Split>
          <Dashed2Column items={companyInfoItems} className="my-4" />

          {/* <div className="table-responsive pt-16">
            <table className="table table-dark table-bordered table-striped text-base">
              <tbody>
                <tr>
                  <th style={{ width: "20%" }}>会社名</th>
                  <td>
                    THE WHY HOW DO COMPANY株式会社（英文名 THE WHY HOW DO
                    COMPANY, Inc.）
                  </td>
                </tr>
                <tr>
                  <th>本社</th>
                  <td>
                    〒160-0005 東京都新宿区愛住町22 第3山田ビル{" "}
                    <Link href="/accessmap">
                      <a>[地図]</a>
                    </Link>
                    <br />
                    TEL：03-4405-5460（代表） FAX：03-4405-6048
                  </td>
                </tr>
                <tr>
                  <th>設立</th>
                  <td>2004年7月12日</td>
                </tr>
                <tr>
                  <th>代表者</th>
                  <td>代表取締役社長 岩尾 俊兵</td>
                </tr>
                <tr>
                  <th>資本金</th>
                  <td>1,617百万円（2024年8月31日現在）</td>
                </tr>
                <tr>
                  <th>売上高</th>
                  <td>747百万円［連結］（2024年8月期）</td>
                </tr>
                <tr>
                  <th>従業員数</th>
                  <td>31名 [連結]（2024年8月期）</td>
                </tr>
                <tr>
                  <th>事業内容</th>
                  <td>
                    次の事業を営むこと及び次の事業を営む会社等事業体の株式または持分を所有することによる事業活動の管理
                    <ul className="list-unstyled mt-2">
                      <li>
                        スマートフォン向けサービス及びソリューションの提供
                      </li>
                      <li>コンピュータに関する個人及び企業への教育</li>
                      <li>不動産賃貸（サブリースを含む）</li>
                      <li>
                        コンサート、演劇、演芸、講演、スポーツ等各種イベントの企画、制作、興行
                      </li>
                      <li>知的財産権の管理、販売及び使用許諾等</li>
                      <li>産業廃棄物及び一般廃棄物の再資源化処理物の販売</li>
                      <li>その他</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>主要取引銀行</th>
                  <td>
                    城南信用金庫、みずほ銀行 中目黒支店、三井住友銀行
                    渋谷支店、三菱UFJ銀行 新橋支店
                  </td>
                </tr>
                <tr>
                  <th>グループ会社</th>
                  <td>
                    WHDCアクロディア株式会社、株式会社渋谷肉横丁、株式会社インタープラン、WHDCエンタテインメント株式会社、
                    GUAM ENTERTAINMENT SYSTEMS, LLC 、株式会社SOUND
                    PORT、Pavilions株式会社、株式会社宇部整環リサイクルセンター
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </section>

        {/* 沿革 */}
        <section id="history" className="container pt-32">
          <Split>
            <TitleLeftLine title="沿革" />
          </Split>

          <Dashed2Column items={historyItems(historyData)} className="my-4" />

          {/* <div className="table-responsive pt-16">
            <table className="table table-dark table-bordered table-striped">
              <tbody>
                {historyData.map((item, index) => (
                  <tr key={`${item.year}-${item.month}-${index}`}>
                    <th
                      style={{
                        textAlign: "right",
                        paddingRight: "1rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span style={{ display: "inline-block", width: "4.5em" }}>
                        {item.year}年
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          width: "2em",
                          textAlign: "right",
                        }}
                      >
                        {item.month}
                      </span>
                      月
                    </th>
                    <td>{item.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </section>

        {/* 社名の由来 */}
        <section id="name" className="container pt-32 pb-32 text-center">
          <Button
            href="/company/name"
            text="社名の由来"
            className="btn-curve btn-lit"
          />
        </section>
      </CenteredLayoutContainer>
    </section>
  );
};

export default CompanyPage;
