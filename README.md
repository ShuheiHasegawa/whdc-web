# WHDC Web

WHDC のコーポレートウェブサイト（Next.js/React 実装）

## 環境要件

- Node.js 16.x 以上（開発時は、v20.18.0 を使用）
- Yarn 1.22.x

## セットアップ

```bash
# パッケージのインストール
yarn install

# 開発サーバーの起動
yarn dev
```

開発サーバーは http://localhost:3000 で起動します。

## 開発コマンド

- `yarn dev` - 開発サーバーの起動
- `yarn build` - プロダクションビルドの作成
- `yarn export` - 静的サイトのエクスポート（IR ページ用）
- `yarn start` - プロダクションサーバーの起動
- `yarn lint` - ESLint によるコード検証

## プロジェクト構成

```
whdc-web/
├── public/                # 静的ファイル
│   ├── css/              # スタイルシート
│   ├── js/               # 静的JavaScriptファイル
│   ├── img/              # 画像ファイル
│   ├── movies/           # 動画ファイル
│   ├── news/             # ニュース関連ファイル
│   ├── fonts/            # フォントファイル
│   └── locales/          # 多言語ファイル (実装方法に関しては、 `/src/components/ManagementTeam/index.jsx` を参照)
├── src/                  # ソースコード
│   ├── components/       # Reactコンポーネント
│   ├── pages/            # Next.jsページコンポーネント
│   ├── styles/           # スタイル関連ファイル
│   ├── i18n/             # 国際化設定
│   ├── utils/            # ユーティリティ関数
│   ├── layouts/          # レイアウトコンポーネント
│   ├── common/           # 共通コンポーネント
│   ├── Backgrounds/      # 背景関連コンポーネント
│   └── data/             # データファイル
├── .next/                # Next.jsビルド出力（git管理外）
├── out/                  # 静的エクスポート出力（git管理外）
├── next.config.js        # Next.js設定ファイル
├── .eslintrc.json        # ESLint設定
└── package.json          # プロジェクト設定と依存関係
```

## ローディング処理の仕組み

サイトのローディング処理は以下のコンポーネントで実装されています：

- `src/components/Loading-Screen/index.jsx` - メインのローディング画面コンポーネント
- `src/common/loadingPace.js` - Pace.js を利用したローディングハンドラ

### 基本的な仕組み

1. `appData.json`の`showLoading`フラグでローディング画面の表示/非表示を制御
2. ローディング中はスクロールを無効化し、body に固定スタイルを適用
3. ローディング完了後は`loadingComplete`カスタムイベントを発行し、スクロールを再有効化

### ハッシュリンク対応

URL にハッシュが含まれる場合（例: `/#section-id`）、以下の処理が行われます：

1. ローディング完了後に`loadingComplete`イベントが発行される
2. `Navbar`と`CompanyPhilosophy`などのコンポーネントがこのイベントをリッスン
3. イベント発火時に対象セクションへスムーズにスクロール

### 使用方法

ローディングイベントを待機して処理を行う場合：

```javascript
// ローディング完了イベントをリッスン
const loadingCompleteHandler = () => {
  // ローディング完了後の処理
  console.log("ローディングが完了しました");
};

window.addEventListener("loadingComplete", loadingCompleteHandler, {
  once: true,
});

// フォールバック（4秒後にイベントが来なかった場合の処理）
setTimeout(() => {
  const body = document.querySelector("body");
  if (
    body &&
    !body.classList.contains("pace-running") &&
    body.style.overflow !== "hidden" &&
    body.style.position !== "fixed"
  ) {
    // ページがロード完了状態の場合の処理
    window.removeEventListener("loadingComplete", loadingCompleteHandler);
  }
}, 4000);
```

### 注意事項

- ローディング中は`body`要素のスクロールが無効化されるため、動的コンテンツの初期化はローディング完了後に行う
- `appData.showLoading = false`に設定するとローディング画面が表示されない
- URL ハッシュによるスクロールはローディング完了後に自動実行される
- `loadingComplete`イベントが発火しない場合に備え、フォールバックタイマーを設定する

## 静的エクスポート（IR ページ用）

IR ページは旧サイトからそのままのため、このプロジェクト全体を静的エクスポートしてデプロイします。
（IR ページも React 実装にするまで）

以下の手順で静的ファイルを生成できます：

1. `yarn export` を実行
2. `out` ディレクトリに静的ファイルが生成されます
3. 生成されたファイルを Web サーバーにアップロード

### 環境切り替えの注意事項

静的エクスポート前に
`.env.production`
`public/news/js/common-redirect-links.js`
上記２ファイルのドメイン設定を環境に合わせて手動で切り替える必要があります：

```javascript
// 開発環境
// var domain = "http://localhost:3000";

// テスト環境
// var domain = "http://test-www.twhdc.co.jp";

// 本番環境
// var domain = "https://www.twhdc.co.jp";
```

現在の環境に合わせて該当する行のコメントを解除し、他の環境の行をコメントアウトしてください。

## 主要な使用技術

- Next.js 12.0.7
- React 17.0.2
- Bootstrap 5.3.3
- i18next（多言語対応）
- Three.js（3D グラフィックス）
- GSAP（アニメーション）
- React Bootstrap
- TypeScript

## 多言語対応

i18next を使用して多言語対応を実装しています。言語ファイルは`public/locales`ディレクトリに配置されています。

## アニメーションと特殊効果

- GSAP - 高度なアニメーション
- Three.js - 3D グラフィックス
- Particles - パーティクルエフェクト
- Framer Motion - コンポーネントアニメーション

## 注意事項

- 静的エクスポート時は`next.config.js`の設定を確認してください
- 画像最適化には Next.js の`Image`コンポーネントを使用してください
- パフォーマンス最適化のため、必要に応じて`React.lazy`を使用してください

## ライセンス

All rights reserved.

```

```
