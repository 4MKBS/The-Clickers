import { useState } from "react";
import "./App.css";
import Login from "./page/login";
import { Route, Routes } from "react-router-dom";
import Registration from "./page/Registration";
import NotFoundPage from "./page/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
