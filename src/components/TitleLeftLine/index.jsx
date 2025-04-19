import React from 'react';

const TitleLeftLine = ({ title, blueText, subtitle, size="text-2xl" }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="title-line bg-blue" style={{ 
        width: '4px', 
        height: '30px', 
        marginRight: '15px',
        borderRadius: '2px'
      }}></div>
      <div>
        <h2 className={`${size} text-blue m-0`}>
          {title}
          {blueText && <span className="color-blue text-base">{blueText}</span>}
        </h2>
        {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
};

export default TitleLeftLine;