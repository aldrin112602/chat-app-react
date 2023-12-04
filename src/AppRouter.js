import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import NoPage from "./components/NoPage";

import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
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
