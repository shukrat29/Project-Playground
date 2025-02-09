import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import SignupPage from "./components/SignupPage";
import SigninPage from "./components/SigninPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
