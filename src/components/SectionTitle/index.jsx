import React from "react";
import Split from "../Split";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="sec-head custom-font text-center">
      <h6 className="wow fadeIn" data-wow-delay=".1s">
        {subtitle}
      </h6>
      <Split>
        <h3 className="wow words chars splitting text-white" data-splitting>
          {title}
        </h3>
      </Split>
    </div>
  );
};

export default SectionTitle;
