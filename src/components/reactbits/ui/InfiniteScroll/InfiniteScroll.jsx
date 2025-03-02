/*
	jsrepo 1.41.2
	Installed from https://reactbits.dev/default/
	2025-3-2
*/

import { useRef, useEffect, useState } from "react";
// GSAPをクライアントサイドでのみインポート
import dynamic from "next/dynamic";

// CSSをインポート
// import './InfiniteScroll.css';

// クライアントサイドでのみGSAPをロードするコンポーネント
const InfiniteScrollClient = dynamic(
  () => import('./InfiniteScrollClient'),
  { ssr: false }
);

export default function InfiniteScroll(props) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // サーバーサイドレンダリング時は静的なプレースホルダーを表示
  if (!isMounted) {
    return (
      <div 
        className="infinite-scroll-wrapper" 
        style={{ 
          maxHeight: props.maxHeight || '100%',
          width: props.width || '30rem',
          overflow: 'hidden'
        }}
      >
        <div className="infinite-scroll-container">
          {(props.items || []).map((item, i) => (
            <div
              className='infinite-scroll-item'
              key={i}
              style={{
                height: `${props.itemMinHeight || 150}px`,
                marginTop: props.negativeMargin || '-0.5em'
              }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  // クライアントサイドではGSAPを使用するコンポーネントをレンダリング
  return <InfiniteScrollClient {...props} />;
}
