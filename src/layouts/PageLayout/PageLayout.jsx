import React from "react";

// Styles
import "./PageLayout.scss";

let classNames = require("classnames");

const PageLayout = ({
  classNameHeader,
  classNameContent,
  headerSlot,
  contentSlot,
}) => {
  let headerClass = classNames("page-layout__header", classNameHeader);
  let contentClass = classNames(
    "page-layout__content",
    "container",
    classNameContent
  );

  return (
    <div className="page-layout">
      <header className={headerClass}>{headerSlot}</header>

      <div className={contentClass}>{contentSlot}</div>
    </div>
  );
};

export default PageLayout;
