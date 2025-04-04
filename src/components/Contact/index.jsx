import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="image-header-wrapper" style={{ position: 'relative', width: '100%', height: '220px' }}>
        <Image
          src="/img/firstview_top_2022_768.png"
          alt="firstview top"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="container pt-32">
        <h2 className="text-2xl text-center">
          お問い合わせ
        </h2>
        <div className="contact-content">
          <article className="contact-box">
            <h2 className="border-primary text-2xl">お問い合わせ先</h2>
            <p>IR情報に関するお問い合せ</p>
            <p>
              <Link href="../ir/inquiry/">
                <a className="btn btn-secondary">お問い合わせページ</a>
              </Link>
            </p>
            <p>法人のお客様・製品・サービスに関するお問い合せ</p>
            <p>
              <a href="https://form.os7.biz/f/52e037cb/" className="btn btn-secondary">
                送信フォームを開く
              </a>
            </p>
          </article>
          <article className="contact-box">
            <h2 className="border-primary text-2xl">
              ゲームアプリ・ソーシャルゲーム内容に関するお問い合わせ
            </h2>
            <p className="contact-text">
              当サイトでは、ゲームアプリ・ソーシャルゲームの内容に関するお問い合わせを受け付けておりません。<br /> 各ゲームのお問い合わせ方法は、お手数ですが下記をご覧ください。
            </p>
            <div className="game-contact-box">
              <p className="game-contact-title">■「サッカー日本代表ヒーローズ」に関するお問い合わせ</p>
              <p className="contact-text">
                GREE、Mobage、mixi、コロプラ、ヤマダゲーム、TSUTAYA オンラインゲーム、App Store（iOS版）およびGoogle Play（Android版）、Yahoo! Mobage、WAKU+で配信中の「サッカー日本代表ヒーローズ」に関するお問い合わせは、ゲーム内にございますお問い合わせフォームよりご連絡ください。
              </p>
              
              <div className="game-platform">
                <h3>GREE</h3>
                <p>GREEにログイン→GREEトップ画面→マイゲーム→[サッカー日本代表ヒーローズ]→画面最下部「お問い合わせ」</p>
              </div>
              
              <div className="game-platform">
                <h3>Mobage</h3>
                <p>Mobageにログイン→Mobageトップ画面→マイゲーム→[サッカー日本代表ヒーローズ]→画面最下部「お問い合わせ」</p>
              </div>
              
              <div className="game-platform">
                <h3>mixi</h3>
                <p>mixiにログイン→mixiトップ画面→マイゲーム→[サッカー日本代表ヒーローズ]→画面最下部「メニュー」→「お問い合わせ」</p>
              </div>
              
              <div className="game-platform">
                <h3>コロプラ</h3>
                <p>コロプラにログイン→マイパスポート画面→マイドーム→[サッカー日本代表ヒーローズ]→画面最下部「お問い合わせ」</p>
              </div>
              
              <div className="game-platform">
                <h3>ヤマダゲーム</h3>
                <p>ヤマダゲームにログイン→ヤマダゲームトップ画面→マイゲーム→[サッカー日本代表ヒーローズ]→TOPページ下部「FAQ」→画面最下部「お問い合わせ」</p>
              </div>
              
              <div className="game-platform">
                <h3>TSUTAYA オンラインゲーム</h3>
                <p>TSUTAYAオンラインゲームにログイン→TSUTAYAオンラインゲームトップ画面→マイゲーム→[サッカー日本代表ヒーローズ]→画面下部「このゲームへのお問い合わせ」</p>
              </div>
              
              <div className="game-platform">
                <h3>Yahoo! Mobage</h3>
                <p>Yahoo! Mobageにログイン→Yahoo! Mobageトップ画面→マイゲーム→[サッカー日本代表ヒーローズ]→画面下部「このゲームに関するお問い合わせ」</p>
              </div>
              
              <div className="game-platform">
                <h3>App Store（iOS版）およびGoogle Play（Android版）</h3>
                <p>ゲームを起動→ゲームスタート→TOPページ下部「FAQ」→画面最下部「お問い合わせ」または問い合わせ受付用メールアドレス<br />（20XXheroes.app-support@twhdc.co.jp）宛にご連絡ください。</p>
              </div>
              
              <div className="game-platform">
                <h3>WAKU+</h3>
                <p>WAKU+にログイン→WAKU+トップ画面→マイゲーム→[サッカー日本代表ヒーローズ]→画面下部「問い合わせ」</p>
              </div>
            </div>
            <div className="contact-note">
              <p>
                ※お問い合せは、迅速なご回答を心がけておりますが、ご質問の内容によっては、お答えできない場合や、ご回答までにお時間をいただく場合がございます。予めご了承ください。
              </p>
            </div>
          </article>
        </div>
      </div>
      
      {/* スタイル追加 */}
      <style jsx>{`
        .contact-header {
          padding-bottom: 15px;
          border-bottom: 2px solid #0085C8;
        }
        
        
        .contact-box {
          padding: 25px;
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .contact-section-title {
          padding-bottom: 10px;
          margin-bottom: 20px;
          border-bottom: 2px solid #0085C8;
        }
        
        .contact-btn {
          display: inline-block;
          background: #0085C8;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 4px;
          margin: 10px 0 20px;
        }
        
        .game-contact-box {
          padding: 20px;
          margin: 20px 0;
          border-radius: 4px;
        }
        
        .game-contact-title {
          font-weight: bold;
          margin-bottom: 15px;
        }
        
        .game-platform {
          margin: 30px 0;
          padding-bottom: 20px;
          text-align: center;
          border-bottom: 1px dashed #eee;
        }
        
        .game-platform h3 {
          font-weight: bold;
          margin-bottom: 10px;
        }
        
        .game-platform p {
          line-height: 1.6;
        }
        
        .contact-note {
          padding: 15px;
          border-radius: 4px;
        }
        
        .contact-text {
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        @media (max-width: 768px) {
          .contact-box, .game-contact-box {
            padding: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;