import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/card";
import { Navigate, Route, Routes } from "react-router-dom";
import { Todo } from "./pages/todo";
import { Users } from "./pages/users";

function App() {
  return (
    <>
      <Routes>
        <>Hey Its the production</>
        <Route path="/" element={<Todo />} />;
        <Route path="/todos" element={<Todo />} />;
        <Route path="/users" element={<Users />} />;
      </Routes>
    </>
  );
}

export default App;
