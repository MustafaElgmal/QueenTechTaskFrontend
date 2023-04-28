import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Protected from "./components/Protected";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <Protected>
            <Home />
          </Protected>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
