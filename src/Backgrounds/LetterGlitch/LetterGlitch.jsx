/*
	jsrepo 1.41.2
	Installed from https://reactbits.dev/default/
	2025-3-1
*/

import React, { useRef, useEffect, useState } from 'react';

const LetterGlitch = ({
  glitchColors = ['#479EAF', '#0080BD', '#2E3078'],
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  text = '',
  textClassName = '',
  textColor = '#ffffff',
  height = '100%',
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const letters = useRef([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef(null);
  const lastGlitchTime = useRef(Date.now());
  const styleRef = useRef(null);
  const textRef = useRef(null);
  
  const [isClient, setIsClient] = useState(false);
  const [currentFontSize, setCurrentFontSize] = useState('1em');

  const staticClassName = 'letter-glitch-container';

  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  const lettersAndSymbols = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '!', '@', '#', '$', '&', '*', '(', ')', '-', '_', '+', '=', '/',
    '[', ']', '{', '}', ';', ':', '<', '>', ',', '0', '1', '2', '3',
    '4', '5', '6', '7', '8', '9'
  ];

  const getRandomChar = () => {
    return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  };

  const getRandomColor = () => {
    return glitchColors[Math.floor(Math.random() * glitchColors.length)];
  };

  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const interpolateColor = (start, end, factor) => {
    const result = {
      r: Math.round(start.r + (end.r - start.r) * factor),
      g: Math.round(start.g + (end.g - start.g) * factor),
      b: Math.round(start.b + (end.b - start.b) * factor),
    };
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
  };

  const calculateGrid = (width, height) => {
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  };

  const initializeLetters = (columns, rows) => {
    grid.current = { columns, rows };
    const totalLetters = columns * rows;
    letters.current = Array.from({ length: totalLetters }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
    }));
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);

    drawLetters();
  };

  const drawLetters = () => {
    if (!context.current || letters.current.length === 0) return;
    const ctx = context.current;
    const { width, height } = canvasRef.current.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top';

    letters.current.forEach((letter, index) => {
      const x = (index % grid.current.columns) * charWidth;
      const y = Math.floor(index / grid.current.columns) * charHeight;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
  };

  const updateLetters = () => {
    if (!letters.current || letters.current.length === 0) return;

    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));

    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.current.length);
      if (!letters.current[index]) continue;

      letters.current[index].char = getRandomChar();
      letters.current[index].targetColor = getRandomColor();

      if (!smooth) {
        letters.current[index].color = letters.current[index].targetColor;
        letters.current[index].colorProgress = 1;
      } else {
        letters.current[index].colorProgress = 0;
      }
    }
  };

  const handleSmoothTransitions = () => {
    let needsRedraw = false;
    letters.current.forEach((letter) => {
      if (letter.colorProgress < 1) {
        letter.colorProgress += 0.05;
        if (letter.colorProgress > 1) letter.colorProgress = 1;

        const startRgb = hexToRgb(letter.color);
        const endRgb = hexToRgb(letter.targetColor);
        if (startRgb && endRgb) {
          letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress);
          needsRedraw = true;
        }
      }
    });

    if (needsRedraw) {
      drawLetters();
    }
  };

  const animate = () => {
    const now = Date.now();
    if (now - lastGlitchTime.current >= glitchSpeed) {
      updateLetters();
      drawLetters();
      lastGlitchTime.current = now;
    }

    if (smooth) {
      handleSmoothTransitions();
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    context.current = canvas.getContext('2d');
    resizeCanvas();
    animate();

    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationRef.current);
        resizeCanvas();
        animate();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [glitchSpeed, smooth]);

  // 画面サイズとテキスト長に基づいてフォントサイズを決定
  const calculateFontSize = (screenWidth, textContent) => {
    if (!textContent) return '1em';
    
    const textLength = textContent.length;
    let size = '1em';
    
    // 大画面 (992px以上)
    if (screenWidth >= 992) {
      if (textLength > 25) size = '0.7em';
      else if (textLength > 16) size = '0.8em';
      else size = '0.9em';
    }
    // 中画面 (576px-991px)
    else if (screenWidth >= 576) {
      if (textLength > 25) size = '0.65em';
      else if (textLength > 16) size = '0.75em';
      else size = '0.75em';
    }
    // 小画面 (575px以下)
    else {
      if (textLength > 25) size = '0.6em';
      else if (textLength > 16) size = '0.7em';
      else size = '0.5em';
      
      // 特に小さい画面
      if (screenWidth <= 375) {
        if (textLength > 25) size = '0.55em';
        else if (textLength > 16) size = '0.65em';
        else size = '0.75em';
      }
    }
    
    // 特定のテキストに対する調整
    if (textContent && textContent.toLowerCase().includes('management team')) {
      return screenWidth <= 576 ? '0.6em' : '0.7em';
    }
    
    return size;
  };

  // クライアントサイドでの初期化
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      const width = window.innerWidth;
      
      // 初期フォントサイズを設定
      const initialSize = calculateFontSize(width, text);
      setCurrentFontSize(initialSize);
      
      // リサイズハンドラー
      const handleResize = () => {
        const width = window.innerWidth;
        const newSize = calculateFontSize(width, text);
        setCurrentFontSize(newSize);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [text]);

  // 高さの値と単位を分離する補助関数
  const parseHeightValue = (heightValue) => {
    if (typeof heightValue === 'number') {
      return { value: heightValue, unit: 'px' };
    }
    
    const match = String(heightValue).match(/^([\d.]+)([a-z%]*)$/i);
    if (match) {
      return { value: parseFloat(match[1]), unit: match[2] || 'px' };
    }
    
    return { value: 100, unit: '%' };
  };

  // 高さの値と単位を分離
  const { value: heightValue, unit: heightUnit } = parseHeightValue(height);

  // モバイル用の高さを計算
  const mobileHeightValue = heightUnit === '%' ? heightValue : Math.floor(heightValue * 0.6);
  const mobileHeight = `${mobileHeightValue}${heightUnit}`;

  // スタイルを動的に挿入（クライアントサイドのみ）
  useEffect(() => {
    if (isClient) {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
      }
      
      const styleTag = document.createElement('style');
      styleTag.innerHTML = `
        .${staticClassName} {
          position: relative;
          width: 100%;
          height: ${height};
          background-color: #000000;
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .${staticClassName} {
            height: ${mobileHeight} !important;
          }
        }
        
        .${staticClassName} .centered-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          color: ${textColor};
          text-align: center;
          width: 80%;
          pointer-events: none;
        }
      `;
      
      document.head.appendChild(styleTag);
      styleRef.current = styleTag;
      
      return () => {
        if (styleRef.current) {
          document.head.removeChild(styleRef.current);
        }
      };
    }
  }, [height, mobileHeight, textColor, isClient]);

  // ベーシックなインラインスタイル
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: height,
    backgroundColor: '#000000',
    overflow: 'hidden',
  };

  const canvasStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
  };

  const outerVignetteStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
  };

  const centerVignetteStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
  };

  // 中央テキストのスタイル
  const centerTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    color: textColor,
    textAlign: 'center',
    width: '98%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    lineHeight: '1.2',
    wordBreak: isClient && window.innerWidth <= 991 ? 'break-word' : 'normal',
    pointerEvents: 'none',
  };

  return (
    <div className={staticClassName} style={containerStyle}>
      <canvas ref={canvasRef} style={canvasStyle} />
      {outerVignette && <div style={outerVignetteStyle}></div>}
      {centerVignette && <div style={centerVignetteStyle}></div>}
      {text && (
        <div 
          ref={textRef}
          className={`centered-text ${textClassName}`}
          style={centerTextStyle}
        >
          <span 
            style={{ 
              fontSize: currentFontSize,
              lineHeight: '1.2',
              display: 'block',
              maxWidth: '100%'
            }}
          >
            {text}
          </span>
        </div>
      )}
    </div>
  );
};

export default LetterGlitch;
