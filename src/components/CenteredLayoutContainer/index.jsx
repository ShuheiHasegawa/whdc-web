import React from "react";

const CenteredLayoutContainer = ({ children, className = "" }) => {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className={`col-lg-10 p-4 ${className}`}>
        {/* <div className={`col-12 col-sm-12 col-md-12 col-lg-10 p-4 ${className}`}> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default CenteredLayoutContainer;