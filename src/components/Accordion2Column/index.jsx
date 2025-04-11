import React, { useState } from "react";

const Accordion2Column = ({
  items = [], // [{ title: string, name: string, history: Array<{ date: string, description: string }> }]
  defaultOpen = -1,
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
            <div className="row align-items-center">
              <div className="col-5">
                <div className="officer-info">
                  <div className="officer-title">{item.title}</div>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-between align-items-center">
                <div className="officer-name">{item.name}</div>
                {/* <div className="latest-history">
                  {item.name}
                </div> */}
              </div>
              <div
                className="col-1 align-items-center"
                style={{ textAlign: "right" }}
              >
                <span className="accordion-icon">
                  <i
                    className={`fas fa-chevron-down ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <div className="row">
                <div className="history-list">
                  {item.history.map((item, historyIndex) => (
                    <div key={historyIndex} className="history-item row py-1">
                      <div
                        className="col-5 history-date"
                        style={{ paddingRight: "24px", textAlign: "right" }}
                      >
                        {item.date}
                      </div>
                      <div className="col-6 history-description">
                        {item.description}
                      </div>
                      <div className="col-1"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion2Column;
