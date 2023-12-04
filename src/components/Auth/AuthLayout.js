import Login from "./Login"
import Register from "./Register"
import NoPage from "../NoPage"

import { BrowserRouter, Routes, Route } from "react-router-dom";
const AuthLayout = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="" element={<Register />}>
            <Route index element={<Register />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AuthLayout
