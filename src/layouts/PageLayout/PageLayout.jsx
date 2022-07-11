import React from "react";

// Styles
import "./PageLayout.scss";

const PageLayout = ({ classNameHeader, headerSlot, contentSlot }) => {
  return (
    <div className="page-layout">
      <header className={["page-layout__header", classNameHeader].join(" ")}>
        {headerSlot}
      </header>

      <div className="page-layout__content container">{contentSlot}</div>
    </div>
  );
};

export default PageLayout;
