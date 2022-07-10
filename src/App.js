import React from "react";

// Pages
import LoadingPage from "./pages/LoadingPage";
import StartPage from "./pages/StartPage";
import AuthPage from "./pages/AuthPage";

// Components

// Style
import "./app.scss";

function App() {
  return (
    <div className="App">
      <AuthPage />
    </div>
  );
}

export default App;
