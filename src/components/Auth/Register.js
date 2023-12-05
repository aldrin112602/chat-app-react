import "./styles/styles.scss";
import AppLogo from "../AppLogo";
import Swal from "sweetalert2";

import { useState } from "react";

import { Link } from "react-router-dom";


const Register = () => {
  const [inputs, setInputs] = useState({});

  const [showRegisterForm, setShowRegisterForm] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          localStorage.setItem("user", JSON.stringify(data[0]));
          setShowRegisterForm(false);
          Swal.fire({
            title: "Success!",
            text: "Login successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        } else {
          //  Invalid username or password
          Swal.fire({
            title: "Error!",
            text: "Invalid username or password",
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      } else {
        console.error("Login failed");
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

  if (!showRegisterForm || localStorage.getItem("user")) {
    return;
  }

  return (
    <div className="form-container">
      <form action="#" method="post" onSubmit={handleSubmit}>
        <AppLogo />
        <h2>Create Account</h2>
        <div className="input-container">
          <label>Enter Full name</label>
          <input
            required
            name="fullname"
            type="text"
            value={inputs.fullname || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Enter Username</label>
          <input
            required
            name="username"
            type="text"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Enter Password</label>
          <input
            required
            name="password"
            type="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        <div className="input-container">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
