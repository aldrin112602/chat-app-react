import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import NoPage from "./components/NoPage";
import Home from "./components/Home";

const AppRouter = () => {
  const navigate = useNavigate();
  const currLocation = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      switch (currLocation.pathname) {
        case "/login":
          navigate("/login", { replace: true });
          break;
        default:
          navigate("/register", { replace: true });
          break;
      }
    }
  }, [navigate, currLocation.pathname]);

  return (
    <Routes>
      {!JSON.parse(localStorage.getItem("user")) && (
        <>
          <Route path="/" element={<Register />} />
          <Route index element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </>
      )}

      {JSON.parse(localStorage.getItem("user")) && (
        <>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </>
      )}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRouter;
 