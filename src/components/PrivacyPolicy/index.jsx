import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div>
        <Image
          src="/img/firstview_top_2022_768.png"
          alt="firstview top"
          width={768}
          height={400}
          layout="responsive"
        />

        <p className="topics">
          <span className="text-2xl text-white font-bold">
            プライバシーポリシー
          </span>
        </p>

        <div className="otherWise">
          <div className="owBox">
            <section id="item1">
              <h2 className="border-primary text-2xl text-blue left">
                個人情報保護方針
              </h2>
              <ul>
                <li className="text-base left normal">
                  THE WHY HOW DO
                  COMPANY株式会社（以下、当社という）は、スマートフォン向けのサービスとしてプラットフォームサービスや、ソーシャルゲーム等のコンテンツサービスを事業の柱とする事業者として、すべての事業で取扱う個人情報および従業員等の個人情報を大切に取扱い、個人の権利利益を保護することが重要な社会的責務と考えています。
                  <br />
                  当社は、当社の事業の用に供するすべての個人情報を適切に取扱うため、当社全従業者が遵守すべき行動基準として本個人情報保護方針を定め、その遵守の徹底を図ることといたします。
                </li>
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <li key={num} className="text-base left normal">
                    {num}. {getPrivacyPolicyText(num)}
                  </li>
                ))}
                <li className="text-base right normal infoTitle">
                  制定：2008年6月10日
                  <br />
                  改訂：2020年5月1日
                  <br />
                  THE WHY HOW DO COMPANY株式会社
                  <br />
                  代表取締役社長&emsp;岩尾&nbsp;俊兵
                </li>
              </ul>
            </section>

            <section id="item2">
              <h2 className="border-primary text-2xl text-blue left pt-32">
                当個人情報保護方針に関するお問い合わせ
              </h2>
              <ul>
                <li className="text-base left normal">
                  THE WHY HOW DO COMPANY株式会社 個人情報苦情及び相談窓口
                </li>
                <li className="text-base left normal">
                  TEL:03-4405-5460
                  <br />
                  FAX:03-4405-6048
                  <br />
                  <a href="mailto:privacy@acrodea.co.jp?subject=[Acrodea Privacy Policy]">
                    <Image
                      src="/image/goMail.gif"
                      alt="メールを送信"
                      width={116}
                      height={29}
                    />
                  </a>
                </li>
                <li className="text-base left normal">
                  この受付窓口は、「個人情報の取扱いに関する苦情、相談」に関する窓口です。IR、製品及びサービスに関するお問い合わせにつきましては、別途窓口を設けておりますのでそちらからお願いいたします。
                </li>
                <li className="text-base left normal infoTitle">
                  IR情報に関するお問い合せ
                  <br />
                  <Link href="/ir/inquiry">
                    <a>お問い合わせページ</a>
                  </Link>
                  <br />
                  法人のお客様・製品・サービスに関するお問い合せ
                  <br />
                  <a href="https://form.os7.biz/f/52e037cb/">
                    送信フォームを開く
                  </a>
                </li>
              </ul>
            </section>

            <section id="item3">
              <h2 className="border-primary text-2xl text-blue left pt-32">
                当社が取扱う個人情報について
              </h2>
              <ul>
                <li className="normal text-base left">
                  当社では「個人情報保護方針」に基づき個人情報の適切な保護に取り組んでいます。当社が事業の用に供するために取得し、または保有する個人情報について、以下の通りお知らせいたします。
                </li>
                {getPersonalInfoItems().map((item, index) => (
                  <React.Fragment key={index}>
                    <li className="normal text-base left">{item.title}</li>
                    {item.content.map((text, i) => (
                      <li key={i} className="normal text-base left">
                        {text}
                      </li>
                    ))}
                  </React.Fragment>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <style jsx>{`
          .topics {
            text-align: center;
            padding: 1rem 0;
            background: rgba(0, 0, 0, 0.8);
          }

          .owBox {
            padding: 2rem;
            margin-bottom: 2rem;
          }

          ul {
            list-style: none;
            padding: 0;
          }

          li {
            margin-bottom: 1rem;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          .infoTitle {
            margin-top: 2rem;
          }
        `}</style>
      </div>
    </section>
  );
};

// プライバシーポリシーの各項目のテキストを返す関数
const getPrivacyPolicyText = (num) => {
  const texts = {
    1: "当社は、個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守します。そのため、日本産業規格「個人情報保護マネジメントシステム — 要求事項」(JIS Q 15001)に準拠した個人情報保護マネジメントシステムを策定し、適切に運用いたします。",
    2: "当社は、事業の内容及び規模を考慮した適切な個人情報の取得、利用及び提供を行います。それには特定された利用目的の達成に必要な範囲を超えた個人情報の取扱いを行わないこと及びそのための措置を講じることを含みます。",
    3: "当社は、個人情報の取扱いの全部又は一部を委託する場合は、その取扱いを委託された個人情報の安全管理が図られるよう、委託を受けた者に対する必要かつ適切な監督を行います。",
    4: "当社は、本人の同意がある場合又は法令に基づく場合を除き、個人情報を第三者に提供することはありません。",
    5: "当社は、個人情報の漏えい、滅失又はき損の防止及び是正のための措置を講じます。",
    6: "当社は、個人情報の取扱いに関する苦情及び相談への適切かつ迅速な対応に努めます。また、当社の個人情報保護方針の内容に関するお問合せ及び、当社が保有する保有個人データの開示等の請求等（利用目的の通知、開示、訂正・追加又は削除、利用又は提供の停止）を受け付けます。当社の個人情報保護方針の内容に関するお問合せ及び、開示等の請求等の手続きにつきましては、以下の「個人情報苦情及び相談窓口」までご連絡ください。",
    7: "当社は、個人情報保護マネジメントシステムの継続的改善を行ないます。",
  };
  return texts[num] || "";
};

// 個人情報に関する項目を返す関数
const getPersonalInfoItems = () => [
  {
    title: "(1)個人情報の取扱事業者の名称",
    content: [
      "THE WHY HOW DO COMPANY株式会社",
      "〒160-0005 東京都新宿区愛住町22 第3山田ビル",
    ],
  },
  {
    title: "(2)個人情報（要配慮情報を含む）の管理者およびその連絡先",
    content: [
      "個人情報保護管理者 管理本部長 橋本直樹",
      "TEL:03-4405-5460 FAX:03-4405-6048",
    ],
  },
  {
    title: "(3)直接書面取得以外で取得する場合の個人情報の利用目的",
    content: [
      "・電話で伝えられた本人情報：お申込・ご相談において必要となった用件を処理するため",
      "・カメラで撮影した映像情報：当社敷地内、敷地出入口の安全、防犯等の管理のため",
      "・委託元から預託された情報：特定された利用目的の範囲内で行なう受託業務の遂行のため",
      "・人材会社から提供される個人情報：採用選考、情報提供および関連する業務連絡のため",
    ],
  },
  {
    title: "(4)個人情報に関するお問い合わせ窓口",
    content: [
      "個人情報の取扱いに関する苦情・相談の申し出先：",
      "TEL:03-4405-5460 FAX:03-4405-6048",
      "保有個人データの開示等の請求等に応じる申し出先：",
      "TEL:03-4405-5460 FAX:03-4405-6048",
    ],
  },
  {
    title: "(5)所属する認定個人情報保護団体の名称および苦情の解決の申し出先",
    content: ["現在、当社の所属する認定個人情報保護団体はありません。"],
  },
  {
    title: "(6)保有個人データの「開示等の請求等」に応じる手続き等",
    content: [
      "ご本人がご自身を識別できる保有個人データについて、利用目的の通知、開示、内容の訂正、追加または削除、利用の停止、消去および第三者への提供の停止（総称して、「開示等」という）を求めるためのお申し出をされる場合は、上掲の当社「保有個人データの開示等の請求等に応じる申し出先」にご連絡下さい。",
      "当社より開示等の求めに際して提出していただく書面（開示等の請求等申請書）の様式を送付いたしますので、当該「申請書」に必要事項を記載し、申込みご本人様であることが確認できる書類などを添付のうえ、お申し込みできます。",
    ],
  },
];

export default PrivacyPolicy;
