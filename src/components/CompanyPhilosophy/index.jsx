/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import SectionHeader from "../SectionHeader";
import TitleLeftLine from "../TitleLeftLine";
import CenteredLayoutContainer from "../CenteredLayoutContainer";
import appData from "../../data/app.json";

const CompanyPhilosophy = () => {
  // スムーズスクロールのためのeffectを追加
  useEffect(() => {
    // ヘッダーの高さを取得
    const getHeaderHeight = () => {
      const navbar = document.querySelector('.navbar');
      const fixedHeader = document.querySelector('.navbar-fixed');
      
      if (fixedHeader) return fixedHeader.offsetHeight;
      if (navbar) return navbar.offsetHeight;
      return 86; // デフォルト値
    };

    // 特定要素へのスクロール関数
    const scrollToElement = (elementId) => {
      const element = document.getElementById(elementId);
      if (!element) return;
      
      const headerHeight = getHeaderHeight();
      const buffer = 40; // スクロール余白
      const rect = element.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const targetY = rect.top + scrollY - headerHeight - buffer;
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    };

    // URL ハッシュに基づくスクロール処理
    const handleHashScroll = () => {
      if (typeof window === "undefined" || !window.location.hash) return;
      
      const id = window.location.hash.substring(1);
      
      // ローディング状態に応じた処理
      if (appData.showLoading) {
        // ローディング完了イベントを待機
        const loadingCompleteHandler = () => {
          setTimeout(() => scrollToElement(id), 300);
        };
        
        window.addEventListener('loadingComplete', loadingCompleteHandler, { once: true });
        
        // フォールバック処理
        setTimeout(() => {
          const body = document.querySelector('body');
          if (body && !body.classList.contains('pace-running') && 
              body.style.overflow !== 'hidden' && body.style.position !== 'fixed') {
            scrollToElement(id);
          }
        }, 4000);
      } else {
        // ローディングがない場合は直接実行
        if (document.readyState === 'complete') {
          setTimeout(() => scrollToElement(id), 300);
        } else {
          window.addEventListener('load', () => {
            setTimeout(() => scrollToElement(id), 300);
          }, { once: true });
        }
      }
    };
    
    // ハッシュスクロール実行
    handleHashScroll();
    
    // アンカーリンクのクリックハンドラー
    const handleAnchorClick = (e) => {
      const anchor = e.currentTarget;
      if (!anchor.getAttribute('href') || !anchor.getAttribute('href').startsWith('#')) return;
      
      e.preventDefault();
      const href = anchor.getAttribute('href');
      const id = href.substring(1);
      
      window.history.pushState(null, null, href);
      scrollToElement(id);
    };
    
    // ページ内のハッシュリンクにイベントを追加
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });
    
    // クリーンアップ
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <section id="company-philosophy">
      <SectionHeader text="企業憲章" />
      <CenteredLayoutContainer>
        <div className="pt-32">
          <div>
            <TitleLeftLine title="企業理念" blueText="（全社レベル）" />
            <section id="philosophy">
              <div className="pt-4">
                THE WHY HOW DO
                COMPANY（以後、ワイハウ）の使命（ミッション＝パーパス）を「価値創造の力で、もう一度豊かになる」とします。
              </div>
              <p className="pt-4">
                ワイハウ自体が、そしてワイハウに集まる企業群が、さらにはワイハウに関係するすべての人が価値創造によって豊かさを取り戻すことができる場を作ること／価値創造のための理論と実践の体系を構築し世界中に共有することこそが、ワイハウのミッション＝パーパスです。
              </p>
              <p className="pt-2">
                このミッション＝パーパスを実現するための実践を支える価値観（バリュー）は下記の「Why」、「How」、「Do」、「Company」の４つに分解されます。
              </p>
              <ul className="p-0">
                <li className="pt-2">
                  <strong>Why</strong>
                  ......何のために生きるのか、他者と創り合える未来を探る
                </li>
                <li className="pt-2">
                  <strong>How</strong>
                  ......信じられる未来を実現するために、今現在の他者との対立を解消する
                </li>
                <li className="pt-2">
                  <strong>Do</strong>
                  ......不断の実行のために、過去の失敗を打ち消す次の一手を打ち続ける
                </li>
                <li className="pt-2">
                  <strong>Company</strong>......Why, How,
                  Doの実践共同体（Company）が自然と拡大する公明正大な組織
                </li>
              </ul>
              <p className="pt-2">
                ワイハウは、こうした理念のもとに多様な組織と個人が集まってくる価値創造の場を創り出し、不断のビジネスモデル革新と学び合いによって、経営プロフェッショナルを生み出します。それによって、近未来の具体的なビジョンとして「ビジネスモデル革新に悩むすべての経営者が
                &quot;ワイハウならきっと答えを出すに違いない&quot;
                と思って下さるような、言い換えればビジネスモデルの総合商社／Ｍ＆Ａ業界における総合不動産ディベロッパーのような、唯一無二の存在になる」ことを掲げます。
              </p>
            </section>
          </div>

          <div className="pt-4">
            <div className="pt-8">
              <TitleLeftLine title="経営方針" blueText="（事業レベル）" />
            </div>
            <section id="policy" className="pt-4">
              <ul className="p-0">
                <li>
                  ワイハウグループは、全社を挙げて、下記の経営方針を共有していきます。
                </li>
              </ul>
              <ul className="p-0 pt-2">
                <li>公明正大なヒトの流れ</li>
                <li>公明正大なカネの流れ</li>
                <li>会社はヒト、モノ、カネを社会から預かる公器</li>
                <li>すべての人は尊敬すべき人生の経営者</li>
                <li>すべての人は尊敬すべき人生のプロフェッショナル</li>
              </ul>
            </section>
          </div>

          <div className="pt-4 pb-16">
            <div className="pt-8">
              <TitleLeftLine title="行動規範" blueText="（個人レベル）" />
            </div>
            <section id="code" className="pt-4">
              <ul className="p-0">
                <li>
                  私たちは、経営理念と経営方針をし、これを実践するために、経営層から従業員まで全員が従うべき行動規範を以下のとおり定めます。これらの行動規範は「実際に行動できて初めて知ったと言える」という知行合一の精神の下で、7か条の意味を各自で考えながら実践していきます。
                </li>
              </ul>
              <ul className="p-0 pt-2">
                <li>巧言令色、すくなし仁。</li>
                <li>己のれの欲せざる所、人に施すことなかれ。</li>
                <li>過ちて改めざる、是れを過ちと謂う。</li>
                <li>人の己を知らざるを患えず、人を知らざるを患う。</li>
                <li>小利を見ることなかれ。小利を見れば則ち大事成らず。</li>
                <li>君子は和して同ぜず。小人は同じて和せず。</li>
                <li>君子は言を以て人を挙げず、人を以て言を廃せず。</li>
              </ul>
            </section>
          </div>

          {/* <div className="pt-4">
            <div
              className="small"
              style={{ textAlign: "right", color: "#fff" }}
            >
              <ul className="p-0">
                <li>制定：平成19年9月25日</li>
                <li className="pt-1">改定：平成22年9月22日</li>
                <li className="pt-1">改定：平成22年9月29日</li>
                <li className="pt-1">改定：平成25年1月15日</li>
                <li className="pt-1">改定：令和4年7月16日</li>
                <li className="pt-1">改定：令和7年4月14日</li>
              </ul>
            </div>
          </div> */}
        </div>
      </CenteredLayoutContainer>
    </section>
  );
};

export default CompanyPhilosophy;
