import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import LoadingPage from "@Pages/LoadingPage";
import OnboardingPage from "@Pages/OnboardingPage";
import CreateProfilePage from "@Pages/CreateProfilePage";

// Style
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/createProfile" element={<CreateProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
