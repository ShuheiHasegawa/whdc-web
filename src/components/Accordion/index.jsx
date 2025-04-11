import React, { useState } from "react";

const Accordion = ({
  items = [], // [{ title: string, content: string | ReactNode }]
  defaultOpen = -1, // デフォルトで開くアイテムのインデックス
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultOpen);

  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className={`accordion-container ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-header ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleItem(index)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <span className="accordion-title">{item.title}</span>
              <span className="accordion-icon">
                <i
                  className={`fas fa-chevron-down ${
                    activeIndex === index ? "rotate" : ""
                  }`}
                />
              </span>
            </div>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? "show" : ""
            }`}
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
