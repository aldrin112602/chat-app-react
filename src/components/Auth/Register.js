import AppLogo from "../AppLogo";
import Swal from "sweetalert2";
import CustomRequest from "../../request/CustomRequest";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  // Changed component name to Register
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // CustomRequest logic for registration
      const data = await CustomRequest({
        method: "post",
        body: inputs,
        uri: "api/register", // Assuming there is a registration endpoint
      });

      if (data) {
        // Registration successful
        Swal.fire({
          title: "Success!",
          text: "Registration successful",
          icon: "success",
          confirmButtonText: "Okay",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login"); // Redirect to login page after successful registration
          }
        });
      } else {
        // Registration failed
        Swal.fire({
          title: "Error!",
          text: "Registration failed",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
    } catch (error) {
      console.error("Error during registration: ", error.message);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  if (localStorage.getItem("user")) {
    return null; 
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <AppLogo />

        <h2 className="text-2xl font-bold mb-4 text-slate-800">
          Register Account {/* Updated heading */}
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullname"
          >
            Enter Fullname
          </label>
          <input
            required
            name="fullname"
            className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={inputs.fullname || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register {/* Updated button text */}
          </button>
        </div>

        <div className="mb-4">
          <p className="text-sm text-slate-900">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
