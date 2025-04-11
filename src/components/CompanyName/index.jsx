import React from "react";
import Link from "next/link";
import HeroImage from "../HeroImage";
import TitleLeftLine from "../TitleLeftLine";
import Split from "../Split";
import CenteredLayoutContainer from "../CenteredLayoutContainer";

const CompanyNamePage = () => {
  return (
    <section id="top">
      {/* <HeroImage
        src="/img/whdc/company/firstview_02_2022.png"
        alt="firstview_about"
        objectFit="cover"
        priority
      /> */}

      <CenteredLayoutContainer>
        {/* 社名の由来 */}
        <section id="message" className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div
                className="d-flex justify-content-between align-items-end pb-2 mb-4"
                style={{
                  width: "100%",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  /* border-bottom-color: #0369b4; */
                  borderBottomColor: "gray",
                }}
              >
                <div className="row" style={{ width: "100%" }}>
                  <div className="col-md-6">
                    <Split>
                      <TitleLeftLine title="社名の由来" />
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
                      <p className="mb-0">新任取締役 弦間 明</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="mb-4">
                  この度、縁があって、再生THE WHY HOW DO
                  COMPANY株式会社（2022年1月1日より社名変更）の独立社外取締役に就任しました弦間
                  明でございます。就任にあたりひと言、ご挨拶を申し上げます。
                </p>
                <p className="mb-4">
                  私は1997年から2003年まで上場1部企業の社長・会長職を体験しました。その後、2004年から現在まで上場1部企業数社の独立社外取締役及び監査等委員職の経験を積んできている者であります。
                </p>
                <p className="mb-4">
                  私のスキルマトリックスは企業経営、マーケティング戦略、海外駐在のカテゴリーに該当いたします。そうした意味でこれまでに培ってきた経験と知恵を当社の経営に存分に活かし、当社の更なる成長、発展、進化に役立ててまいります。
                </p>
                <p className="mb-4">
                  さて、私は、経営は4大経営資源である人、物、金、ブランドのポテンシャルを最大限に引き出し活用することと認識しております。
                  そのためには次に述べる経営の5大要素を着実にかつ確実に具現化することであります。
                </p>
                <p className="mb-4">
                  ■5大要素
                  <br />
                  ・1つ目のWHY理念は顧客、社員、社会価値の創造、提供です。
                  <br />
                  ・2つ目のHOW戦略は働き方、稼ぎ方、儲け方の仕組みづくりです。
                  <br />
                  ・3つ目のDO実行は計画、実行、レビュー、カイゼンのサイクルです。
                  <br />
                  ・4つ目のKPI重要業績評価指標は営業利益、ROS、キャッシュフローの拡大です。
                  <br />
                  ・5つ目のKGI重要統治評価指導は持続的成長の確保、中長期的な企業価値の向上、社会貢献です。
                  <br />
                  この5大要素が組織内に根付き、機能することで当社の健全経営が達成できるものと確信いたします。
                </p>
                <p className="mb-4">
                  最後に独立社外取締役というガバナンスが実効性を上げるべき職責を全うする所存であります。各位の大局的、長期的視点でのご指導をお願いいたします。
                </p>
                <div
                  className="text-end mt-5"
                  style={{
                    textAlign: "right",
                    width: "100%",
                  }}
                >
                  <p className="mb-2">敬具</p>
                  <p className="mb-2">2021年11月29日</p>
                  <p className="mb-2">THE WHY HOW DO COMPANY株式会社</p>
                  <p className="mb-0">新任取締役 弦間 明</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CenteredLayoutContainer>
    </section>
  );
};

export default CompanyNamePage;
