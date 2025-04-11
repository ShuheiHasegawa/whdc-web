import React from "react";

const Button = ({
  type = "link", // "button", "mail", "link"
  href = "#",
  email = "",
  subject = "",
  icon = "",
  text = "ボタン",
  className = "",
  style = {},
  onClick,
  newTab = false, // デフォルトは同じタブ
}) => {
  const buttonContent = (
    <>
      {icon && <i className={icon} style={{ marginRight: "8px" }}></i>}
      <span>{text}</span>
    </>
  );

  if (type === "mail") {
    return (
      <div>
        <a
          href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
          className={`btn-outline ${className}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 16px",
            color: "white",
            borderRadius: "4px",
            textDecoration: "none",
            transition: "all 0.3s ease",
            ...style,
          }}
        >
          {buttonContent}
        </a>
      </div>
    );
  }

  if (type === "link") {
    return (
      <div>
        <a
          href={href}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
          className={`btn-outline ${className}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 16px",
            color: "white",
            borderRadius: "4px",
            textDecoration: "none",
            transition: "all 0.3s ease",
            ...style,
          }}
        >
          {buttonContent}
        </a>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        className={`btn-outline ${className}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "8px 16px",
          color: "white",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          ...style,
        }}
        onClick={onClick}
      >
        {buttonContent}
      </button>
    </div>
  );
};

export default Button;
