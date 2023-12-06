import AppLogo from "../AppLogo";
import Swal from "sweetalert2";
import CustomRequest from "../../request/CustomRequest";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [showLoginForm, setShowLoginForm] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await CustomRequest({
        method: "post",
        body: inputs,
        uri: "api/login",
      });

      if (data.length > 0) {
        localStorage.setItem("user", JSON.stringify(data[0]));
        setShowLoginForm(false);
        Swal.fire({
          title: "Success!",
          text: "Login successfully",
          icon: "success",
          confirmButtonText: "Okay",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/home");
          }
        });

      } else {
        // Invalid username or password
        Swal.fire({
          title: "Error!",
          text: "Invalid username or password",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
    } catch (error) {
      console.error("Error during login: ", error.message);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  if (!showLoginForm || localStorage.getItem("user")) {
    return;
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <AppLogo />

        <h2 className="text-2xl font-bold mb-4 text-slate-800">
          Login Account
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Enter Username
          </label>
          <input
            required
            name="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Enter Password
          </label>
          <input
            required
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <p className="text-sm text-slate-900">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
          </p>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
