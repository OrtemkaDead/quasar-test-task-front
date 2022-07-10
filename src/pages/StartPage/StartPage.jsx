import React from "react";

// Components
import StartContent from "../../components/StartContent";
import StartSwiper from "../../components/StartSwiper";

// Styles
import "./StartPage.scss";

const StartPage = () => {
  return (
    <div className="start-page start">
      {/* <div className="container">
        <StartSwiper />
      </div> */}

      <StartSwiper />
    </div>
  );
};

export default StartPage;
