import React from "react";
import Image from "next/image";
import Link from "next/link";

const Notice = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <Image
        src="/img/firstview_top_2022_768.png"
        alt="firstview top"
        width={768}
        height={400}
        layout="responsive"
      />

      <p className="topics">
        <span className="text-2xl text-white font-bold">ご利用にあたって</span>
      </p>

      <div>
        <div className="p-4">
          <p className="text-base center normal">
            当ウェブサイトは、THE WHY HOW DO
            COMPANY株式会社の活動をご理解いただくための情報提供を目的としたものです。
            <br />
            当ウェブサイトをご利用の際には、下記の利用規定を必ずお読みください。当ウェブサイトに含まれるコンテンツや情報を閲覧、使用、ダウンロードされた場合には、以下の記載事項、条件に同意されたこととさせていただきます。
          </p>

          <div className="owBox">
            <h2 className="borderHighBlue text-2xl text-blue left">免責事項</h2>
            <ul>
              <li className="text-base left normal">
                当ウェブサイトのご利用は、お客様ご自身の責任において行われるものとします。当ウェブサイト上に掲載されている各種情報については、慎重に作成、管理いたしますが、これらの情報の正確性、有用性、完全性をTHE
                WHY HOW DO
                COMPANY株式会社は一切保証いたしません。また、お客様がこれらの情報をご利用になり、またはご利用になれなかったことによる障害および損害について、THE
                WHY HOW DO
                COMPANY株式会社は一切の責任を負いませんのでご了承ください。
                <br />
                THE WHY HOW DO
                COMPANY株式会社は、お客様が当ウェブサイトにリンクが張られている第三者のウェブサイト、または当ウェブサイトにリンクを張られている第三者のウェブサイトから取得する各種情報のご利用に際して生じたいかなる損害についても一切の責任を負いません。
              </li>
              <li className="text-base left normal">
                通信環境、お客様のコンピュータ環境などにより、当ウェブサイト正常にご利用できない場合がございます。
                <br />
                当ウェブサイトに掲載する情報の全てまたは一部を予告なく変更する場合がございます。
                <br />
                当ウェブサイトの運用休止または停止をする場合がございます。
              </li>
              <li className="text-base left normal">
                当社は、個人情報の取扱いに関する法令､国が定める指針その他の規範を遵守します。
              </li>
            </ul>
          </div>

          <div className="owBox">
            <h2 className="borderHighBlue text-2xl text-blue left">
              著作権・商標権
            </h2>
            <ul>
              <li className="text-base left normal">
                当ウェブサイト上に掲載されている著作物（文章、写真、イラスト、動画、音声、ソフトウェア等）の著作権は、THE
                WHY HOW DO
                COMPANY株式会社または第三者に帰属し、著作権法ならびに条約により保護されております。
                <br />
                私的使用目的の複製、引用等、著作権法上認められている範囲を除き、著作権者の許諾なしに、これらの著作物を複製、引用、転送、配布、改変、修正、追加、翻訳、転送、上演等の行為を禁止いたします。
                <br />
                当ウェブサイトに掲載されている、THE WHY HOW DO
                COMPANY株式会社の商品またはサービスの名称等は、THE WHY HOW DO
                COMPANY株式会社の商標または登録商標です。
                <br />
                THE WHY HOW DO COMPANY株式会社への使用許諾のお申し込みは
                <Link href="/inquiry">
                  <a>「お問い合わせ」</a>
                </Link>
                よりご連絡ください。
              </li>
            </ul>
          </div>

          <div className="owBox">
            <h2 className="borderHighBlue text-2xl text-blue left">
              当ウェブサイトへのリンクについて
            </h2>
            <p className="text-base black center">
              当ウェブサイトへのリンクは、営利、非営利を問わず原則自由とし、THE
              WHY HOW DO
              COMPANY株式会社へのご連絡は不要といたします。但し、以下のいずれかに該当するか、またはその恐れがある場合にはご遠慮ください。
              <br />
              なお、リンクに関連した賠償、苦情等に関して、THE WHY HOW DO
              COMPANY株式会社は何ら責任を負いませんのでご了承ください。
            </p>

            <ul>
              <li className="text-base left normal">
                THE WHY HOW DO COMPANY株式会社およびTHE WHY HOW DO
                COMPANY株式会社の製品、サービス、その他活動につき誹謗中傷をするなど、THE
                WHY HOW DO
                COMPANY株式会社の信用を毀損する内容を含むウェブサイトからのリンク
              </li>
              <li className="text-base left normal">
                違法である情報を含むウェブサイトからのリンク
              </li>
              <li className="text-base left normal">
                公序良俗、社会倫理に反する内容を含むウェブサイトからのリンク
              </li>
              <li className="text-base left normal">
                THE WHY HOW DO
                COMPANY株式会社と何らかの提携、協力関係にあると誤解を与えるリンク。または、THE
                WHY HOW DO
                COMPANY株式会社がリンク元のウェブサイトおよび内容を支持しているなどの誤解を生じるリンク
              </li>
            </ul>

            <p className="text-base black">
              上記いずれに該当しない場合にも、フレームリンクやイメージリンク、当ウェブサイトの情報であることが不明確であるリンクなどは、リンクの設定方法の変更、削除をお願いする場合がございます。
              <br />
              なお、当ウェブサイトのコンテンツや情報、URLは、予告なしに変更、廃止される場合がありますので、あらかじめご了承ください。
            </p>
          </div>

          <div className="owBox">
            <h2 className="borderHighBlue text-2xl text-blue left">
              JavaScriptについて
            </h2>
            <p className="text-base black">
              当サイトではJavaScriptを使用しています。JavaScriptが無効の環境では、一部不具合が発生する場合がございます。当サイトご利用の際にはJavaScriptを有効にしてください。
            </p>
          </div>

          <div className="owBox">
            <h2 className="borderHighBlue text-2xl text-blue left">
              プラグインについて
            </h2>
            <p className="text-base black">
              当サイトでは Adobe
              Readerを使用しています。各プラグインをお持ちでない場合は、各社ダウンロードサイトよりプラグインをダウンロードし、インストールを行って下さい。
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .topics {
          text-align: center;
          padding: 2rem 0;
          background: rgba(0, 0, 0, 0.8);
        }

        .borderHighBlue {
          border-bottom: 2px solid #0066cc;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin-bottom: 1rem;
        }

        a {
          color: #0066cc;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};

export default Notice;
