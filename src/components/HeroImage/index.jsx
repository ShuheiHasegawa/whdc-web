import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroImage = ({ 
  src, 
  alt, 
  mobileHeight = '180px',
  tabletHeight = '240px',
  desktopHeight = '300px',
  objectFit = 'contain',
  priority = true
}) => {
  const [height, setHeight] = useState(desktopHeight);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setHeight(mobileHeight);
      } else if (window.innerWidth < 768) {
        setHeight(tabletHeight);
      } else {
        setHeight(desktopHeight);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileHeight, tabletHeight, desktopHeight]);
  
  return (
    <div className="hero-image-wrapper" style={{ 
      position: 'relative', 
      width: '100%', 
      height: height 
    }}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        priority={priority}
      />
    </div>
  );
};

export default HeroImage;