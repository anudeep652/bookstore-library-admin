import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import SubmitBook from "./pages/SubmitBook";

function App() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/createbook"
          element={isLoggedIn ? <CreateBook /> : <Login />}
        />
        <Route path="/submit-book" element={<SubmitBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
