import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DarkTheme from '../layouts/Dark';
import SEO from '../components/Seo';

const Custom404 = () => {
  return (
    <>
      <SEO
        title="404 - ページが見つかりません"
        description="お探しのページが見つかりませんでした。"
      />
      <DarkTheme>
        <Navbar />
        <div className="error-page" style={{ 
          height: "100%",
          minHeight: '70vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '120px 0'
        }}>
          <div className="container">
            <div className="content text-center">
              <h1 style={{ fontSize: '6rem', marginBottom: '1rem' }}>404</h1>
              <h2 style={{ marginBottom: '1rem' }}>ページが見つかりません</h2>
              <p style={{ marginBottom: '2rem' }}>お探しのページは削除されたか、URLが変更された可能性があります。</p>
              <Link href="/">
                <a className="btn-curve" style={{ 
                  display: 'inline-block',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  background: 'var(--color-blue)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}>
                  <span>トップページに戻る</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </DarkTheme>
    </>
  );
};

export default Custom404;