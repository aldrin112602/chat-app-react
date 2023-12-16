import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import NoPage from "./components/NoPage";
import Home from "./components/Home";

const AppRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) navigate("/login", { replace: true });
  }, [navigate]);

  return (
    <Routes>
      {!JSON.parse(localStorage.getItem("user")) && (
        <>
          <Route path="/" element={<Register />} />
          <Route index element={<Register />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </>
      )}

      {JSON.parse(localStorage.getItem("user")) && (
        <Route path="/home" element={<Home />} />
      )}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRouter;
 