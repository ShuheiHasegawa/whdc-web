import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const SEO = ({ 
  title, 
  description, 
  keywords = "THE WHY HOW DO COMPANY, WHDC",
  ogImage, 
  ogUrl,
  companyProfile,
  favicon = "/image/favicon.ico",
  twitterCard = "summary_large_image",
  additionalMeta = [],
  additionalLinks = []
}) => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.twhdc.co.jp';
  
  // サイト名などのデフォルト値
  const siteName = "THE WHY HOW DO COMPANY株式会社";
  const defaultTitle = title || "ワイハウ";
  const defaultDescription = description || "当社IR関連(「企業憲章」「株式情報」「財務ハイライト」「IR資料」「その他IR情報」)などの情報を掲載しています。";
  const defaultCompanyProfile = companyProfile || "THE WHY HOW DO COMPANY株式会社(THE WHY HOW DO COMPANY, Inc.)、本社：東京都新宿区愛住町22 第3山田ビル、TEL：03-4405-5460、設立：2004年7月12日、代表者：代表取締役会長兼社長　田邊 勝己、証券取引所：東京証券取引所市場第二部、証券コード：3823、グループ事業：株式会社渋谷肉横丁、株式会社インタープラン、株式会社クリプト・フィナンシャル・システム、GUAM ENTERTAINMENT SYSTEMS,LLC、株式会社SOUND PORT、Pavilions株式会社、WHDCロジテック株式会社、株式会社宇部整環リサイクルセンター";
  
  // ogUrlを処理：相対パスなら完全なURLに変換、すでに完全なURLなら使用、未指定なら現在のパスから生成
  let fullUrl;
  if (!ogUrl) {
    // URLが指定されていない場合は現在のパスを使用
    fullUrl = `${baseUrl}${router.asPath}`;
  } else if (ogUrl.startsWith('http')) {
    // すでに完全なURLなら、そのまま使用
    fullUrl = ogUrl;
  } else {
    // 相対パスなら、baseUrlと結合
    fullUrl = `${baseUrl}${ogUrl.startsWith('/') ? ogUrl : `/${ogUrl}`}`;
  }
  
  // OGP画像のデフォルトURL
  const defaultOgImage = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`) 
    : `${baseUrl}/img/ogp/default.png`;
  
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      
      {/* 基本メタタグ */}
      <title>{defaultTitle} | {siteName}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={keywords} />
      
      {/* 会社プロファイル（旧システムから継承） */}
      <meta name="companyprofile" content={defaultCompanyProfile} />
      
      {/* OGP */}
      <meta property="og:title" content={`${defaultTitle} | ${siteName}`} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={`${defaultTitle} | ${siteName}`} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={defaultOgImage} />
      
      {/* ファビコン */}
      <link rel="icon" href={favicon} />
      
      {/* 追加のメタタグ（動的に追加可能） */}
      {additionalMeta.map((meta, index) => (
        <meta key={`meta-${index}`} {...meta} />
      ))}
      
      {/* 追加のリンクタグ（CSS等、動的に追加可能） */}
      {additionalLinks.map((link, index) => (
        <link key={`link-${index}`} {...link} />
      ))}
    </Head>
  );
};

export default SEO;