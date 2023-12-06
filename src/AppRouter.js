import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import NoPage from "./components/NoPage";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  if (localStorage.getItem("user")) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route index element={<Register />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRouter;
