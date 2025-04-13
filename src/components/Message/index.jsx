import React from "react";
import SectionHeader from "../SectionHeader";
import TitleLeftLine from "../TitleLeftLine";
import Split from "../Split";
import CenteredLayoutContainer from "../CenteredLayoutContainer";
import Button from "../Button";

const MessagePage = () => {
  return (
    <section id="message">
      <SectionHeader text="社長メッセージ" />
      <CenteredLayoutContainer>
        <section id="message" className="pt-32">
          <div
            className="d-flex justify-content-between align-items-end pb-2 mb-4"
            style={{
              width: "100%",
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "gray",
            }}
          >
            <div className="row" style={{ width: "100%" }}>
              <div className="col-md-6">
                <Split>
                  <TitleLeftLine title="社長メッセージ" />
                </Split>
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
              当社はこれから全社的ビジネスモデルとして「企業再&quot;成&quot;プラットフォーム」を掲げます。まずは通常の事業再生を、次に「売らない事業承継」を、最後に「ビジネスモデル総合商社」を手掛けていきます。こうしてM&A業界における総合ディベロッパーのような唯一無二の存在を目指していきます。
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

export default MessagePage;
