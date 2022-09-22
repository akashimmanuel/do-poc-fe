import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/card";
import { Navigate, Route, Routes } from "react-router-dom";
import { Todo } from "./pages/todo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />} />;
        <Route path="/todos" element={<Todo />} />;
        <Route path="/users" element={<Todo />} />;
      </Routes>
    </>
  );
}

export default App;
