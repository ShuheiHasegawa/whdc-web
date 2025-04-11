/* eslint-disable @next/next/no-img-element */
import React from "react";
// import Link from "next/link";
// import { Formik, Form, Field } from "formik";
import HeroImage from "../HeroImage";
import TitleLeftLine from "../TitleLeftLine";
import CenteredLayoutContainer from "../CenteredLayoutContainer";
import SectionTitle from "../SectionTitle";

const CompanyPhilosophy = () => {
  // function validateEmail(value) {
  //   let error;
  //   if (!value) {
  //     error = "Required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
  //     error = "Invalid email address";
  //   }
  //   return error;
  // }
  // const sendComment = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="pt-0">
      {/* <HeroImage
        src="/img/whdc/ir/ir_rinen_firstview.png"
        alt="image"
        width={768}
        height={400}
        layout="responsive"
      /> */}
      <CenteredLayoutContainer>
        <SectionTitle title="企業憲章" />
        <div className="cont">
          <div className="mb-5">
            <div className="pt-8 pb-8">
              <TitleLeftLine title="企業理念（全社レベル）" />
            </div>
            <div
              className="p-16"
              style={{ color: "#fff", backgroundColor: "#151921" }}
            >
              <div className="text-xl pb-4">
                THE WHY HOW DO
                COMPANY（以後、ワイハウ）の使命（ミッション＝パーパス）を「価値創造の力で、もう一度豊かになる」とします。
              </div>
              <p className="mb-4">
                ワイハウ自体が、そしてワイハウに集まる企業群が、さらにはワイハウに関係するすべての人が価値創造によって豊かさを取り戻すことができる場を作ること／価値創造のための理論と実践の体系を構築し世界中に共有することこそが、ワイハウのミッション＝パーパスです。
              </p>
              <p className="mb-4">
                このミッション＝パーパスを実現するための実践を支える価値観（バリュー）は下記の「Why」、「How」、「Do」、「Company」の４つに分解されます。
              </p>
              <ul className="list-unstyled pl-4">
                <li className="mb-2">
                  <strong>Why</strong>
                  ......何のために生きるのか、他者と創り合える未来を探る
                </li>
                <li className="mb-2">
                  <strong>How</strong>
                  ......信じられる未来を実現するために、今現在の他者との対立を解消する
                </li>
                <li className="mb-2">
                  <strong>Do</strong>
                  ......不断の実行のために、過去の失敗を打ち消す次の一手を打ち続ける
                </li>
                <li className="mb-2">
                  <strong>Company</strong>......Why, How,
                  Doの実践共同体（Company）が自然と拡大する公明正大な組織
                </li>
              </ul>
              <p className="mb-4">
                ワイハウは、こうした理念のもとに多様な組織と個人が集まってくる価値創造の場を創り出し、不断のビジネスモデル革新と学び合いによって、経営プロフェッショナルを生み出します。それによって、近未来の具体的なビジョンとして「ビジネスモデル革新に悩むすべての経営者が
                &quot;ワイハウならきっと答えを出すに違いない&quot;
                と思って下さるような、言い換えればビジネスモデルの総合商社／Ｍ＆Ａ業界における総合不動産ディベロッパーのような、唯一無二の存在になる」ことを掲げます。
              </p>
            </div>
          </div>

          <div className="mb-5">
            <div className="pt-8 pb-8">
              <TitleLeftLine title="経営方針（事業レベル）" />
            </div>
            <div
              className="p-16"
              style={{ color: "#fff", backgroundColor: "#151921" }}
            >
              <p className="mb-3">
                ワイハウグループは、全社を挙げて、下記の経営方針を共有していきます。
              </p>
              <ol className="pl-4">
                <li>公明正大なヒトの流れ</li>
                <li>公明正大なカネの流れ</li>
                <li>会社はヒト、モノ、カネを社会から預かる公器</li>
                <li>すべての人は尊敬すべき人生の経営者</li>
                <li>すべての人は尊敬すべき人生のプロフェッショナル</li>
              </ol>
            </div>
          </div>

          <div className="mb-5">
            <div className="pt-8 pb-8">
              <TitleLeftLine title="行動規範（個人レベル）" />
            </div>
            <div
              className="p-16"
              style={{ color: "#fff", backgroundColor: "#151921" }}
            >
              <p className="mb-4">
                私たちは、経営理念と経営方針をし、これを実践するために、経営層から従業員まで全員が従うべき行動規範を以下のとおり定めます。これらの行動規範は「実際に行動できて初めて知ったと言える」という知行合一の精神の下で、7か条の意味を各自で考えながら実践していきます。
              </p>
              <ol className="pl-4">
                <li>巧言令色、すくなし仁。</li>
                <li>己のれの欲せざる所、人に施すことなかれ。</li>
                <li>過ちて改めざる、是れを過ちと謂う。</li>
                <li>人の己を知らざるを患えず、人を知らざるを患う。</li>
                <li>小利を見ることなかれ。小利を見れば則ち大事成らず。</li>
                <li>君子は和して同ぜず。小人は同じて和せず。</li>
                <li>君子は言を以て人を挙げず、人を以て言を廃せず。</li>
              </ol>
            </div>
          </div>

          <div className="small" style={{ textAlign: "right", color: "#fff" }}>
            <p className="mb-1">制定：平成19年9月25日</p>
            <p className="mb-1">改定：平成22年9月22日</p>
            <p className="mb-1">改定：平成22年9月29日</p>
            <p className="mb-1">改定：平成25年1月15日</p>
            <p className="mb-1">改定：令和4年7月16日</p>
            <p className="mb-1">改訂：令和7年4月14日</p>
          </div>
        </div>
      </CenteredLayoutContainer>
    </section>
  );
};

export default CompanyPhilosophy;
