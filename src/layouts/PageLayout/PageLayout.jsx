import React from "react";

// Styles
import "./PageLayout.scss";

let classNames = require("classnames");

const PageLayout = ({
  classNameHeader,
  classNameContent,
  headerLeftSideSlot,
  headerCenterSideSlot,
  headerRightSideSlot,
  contentSlot,
}) => {
  let headerClass = classNames(
    "page-layout__header",
    "page-layout-header",
    classNameHeader
  );
  let contentClass = classNames(
    "page-layout__content",
    "container",
    classNameContent
  );

  return (
    <div className="page-layout">
      <header className={headerClass}>
        <div className="page-layout-header__left-side">
          {headerLeftSideSlot}
        </div>
        <div className="page-layout-header__center-side">
          {headerCenterSideSlot}
        </div>
        <div className="page-layout-header__right-side">
          {headerRightSideSlot}
        </div>
      </header>

      <div className={contentClass}>{contentSlot}</div>
    </div>
  );
};

export default PageLayout;
