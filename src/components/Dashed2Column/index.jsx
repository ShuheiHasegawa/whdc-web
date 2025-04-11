import React from "react";
import Link from "next/link";

const Dashed2Column = ({
  items = [], // [{ title: string, content: string | ReactNode }]
  className = "",
}) => {
  return (
    <div className={`dashed-container ${className}`}>
      <style jsx>{`
        .dashed-container {
          width: 100%;
          border-top: 1px dashed rgba(255, 255, 255, 0.4);
        }

        .dashed-item {
          padding: 1rem 0;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.4);
          display: flex;
          align-items: flex-start;
        }

        .title {
          width: 20%;
          padding: 0.5rem 1rem 0.5rem 0;
          font-weight: 500;
        }

        .content {
          width: 80%;
          line-height: 1.5;
          padding: 0.5rem 0;
        }

        .content :global(ul) {
          margin-top: 0.5rem;
          padding-left: 1.25rem;
        }

        .content :global(li) {
          margin-bottom: 0.25rem;
        }

        .content :global(a) {
          color: var(--primary);
          text-decoration: none;
        }

        .content :global(a:hover) {
          text-decoration: underline;
        }

        /* レスポンシブ対応 */
        @media (max-width: 768px) {
          .dashed-item {
            flex-direction: column;
            padding: 0.75rem 0;
          }
          
          .title {
            width: 100%;
            padding-bottom: 0.25rem;
          }
          
          .content {
            width: 100%;
          }
        }
      `}</style>
      {items.map((item, index) => (
        <div key={index} className="dashed-item" role="row">
          <div className="title" role="rowheader">{item.title}</div>
          <div className="content" role="cell">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Dashed2Column;
