import React from "react";
import Link from "next/link";
import { historyData } from "./historyData";

const CompanyPage = () => {
  return (
    <main id="top">
      {/* ファーストビュー */}
      <section className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-12">
            <div className="position-relative">
              <img
                src="/img/whdc/company/firstview_02_2022.png"
                alt="firstview_about"
                className="img-fluid w-100"
                style={{ maxHeight: "50vh", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="container py-5" id="profile">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2
              className="h2 whdc-primary-bb pb-2 mb-4"
              style={{ color: "white" }}
            >
              会社情報
            </h2>
            <div className="table-responsive">
              <table className="table table-dark table-bordered table-striped">
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
            </div>
            <div className="mt-4">
              <Link href="/officer">
                <a className="btn whdc-primary-bg text-white btn-sm d-block mb-3">
                  役員/コンプライアンス委員
                </a>
              </Link>
              <Link href="/interview">
                <a className="btn whdc-primary-bg text-white btn-sm d-block">
                  コンプライアンスについて
                  <br />
                  (顧問弁護士 田邊勝己弁護士)
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="container py-5" id="history">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="h2 text-white whdc-primary-bb pb-2 mb-4">沿革</h2>
            <div className="table-responsive">
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
                        <span
                          style={{ display: "inline-block", width: "4.5em" }}
                        >
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
            </div>
          </div>
        </div>
      </section>

      {/* 社長メッセージ */}
      <section className="container py-5" id="message">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="d-flex justify-content-between align-items-end whdc-primary-bb pb-2 mb-4"
              style={{ width: "100%" }}
            >
              <div className="row" style={{ width: "100%" }}>
                <div className="col-md-6">
                  <h2 className="h2 text-white mb-0">社長メッセージ</h2>
                </div>
                <div className="col-md-6">
                  <div
                    className="text-end d-flex flex-column align-items-end"
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <p className="mb-0">THE WHY HOW DO COMPANY株式会社</p>
                    <p className="mb-0">代表取締役社長 岩尾 俊兵</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="lead mb-4">価値創造の力で、もう一度豊かになる。</p>
              <p className="mb-4">
                これは、私が社長就任にあたって株主の皆様と従業員の皆様とに示したビジョンです。当社は技術の力で急成長した輝かしい歴史を持ちます。しかし、やがて衰退局面に入ってしまい、そこから抜け出せずにいます。
              </p>
              <p className="mb-4">
                しかも、現場で働く人はどの会社より真面目で、実直で、誠実な人ばかりなのに、です。善人が努力を続けてもどんどんと貧しくなってしまう「構造」があったのです。その根本原因は全社的ビジネスモデルの不在にあったと考えます。全社的ビジネスモデルがないために、当社が色んなことに手を出していて何をやっている組織なのかが利害関係者に伝わらず、不信感が広がっていたと思うのです。
              </p>
              <p className="mb-4">
                当社はこれから全社的ビジネスモデルとして「企業再"成"プラットフォーム」を掲げます。まずは通常の事業再生を、次に「売らない事業承継」を、最後に「ビジネスモデル総合商社」を手掛けていきます。こうしてM&A業界における総合ディベロッパーのような唯一無二の存在を目指していきます。
              </p>
              <p className="mb-4">
                会社は色んなものを「預かる」存在です。株主から資金を預かり、お客様から信頼を預かり、従業員から人生を預かっています。人間というもの、預かったものは必ず返さなければいけません。もっと資金を預けたい、もっと信頼を預けたい、もっと人生を預けてみたい。そう思っていただける、信用のおける会社に生まれ変わるのが我々の使命です。
              </p>
              <p className="mb-4">
                このWebサイトを訪問して、私の思いを読んでくださったすべての方に、あらためて感謝申し上げます。引き続きのご指導ご鞭撻のほど何卒よろしくお願い申し上げます。
              </p>
              <div
                className="text-end mt-5"
                style={{
                  textAlign: "right",
                  width: "100%",
                }}
              >
                <p className="mb-2">敬具</p>
                <p className="mb-2">2024年11月28日</p>
                <p className="mb-2">THE WHY HOW DO COMPANY株式会社</p>
                <p className="mb-0">代表取締役社長 岩尾 俊兵</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 社名の由来 */}
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <Link href="/companyname">
              <a className="btn text-white whdc-primary-bg btn-sm d-block">
                社名の由来
              </a>
            </Link>
          </div>
        </div>
      </section>
      <style jsx global>{`
        .table th {
          font-size: clamp(0.9rem, 2vw, 1.2rem);
        }
        .table td {
          font-size: clamp(0.9rem, 2vw, 1.2rem);
        }
        .whdc-primary-color {
          color: #0369b4;
        }
        .whdc-secondary-color {
          color: #393c93;
        }
        .whdc-tertiary-color {
          color: #55bfd7;
        }
        .whdc-primary-bg {
          background-color: #0369b4;
        }
        .whdc-primary-bg:hover {
        }
        .whdc-secondary-bg {
          background-color: #393c93;
        }
        .whdc-tertiary-bg {
          background-color: #55bfd7;
        }
        .whdc-primary-bb {
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: #0369b4;
        }
      `}</style>
    </main>
  );
};

export default CompanyPage;
