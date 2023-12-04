import "./styles/styles.scss";
import AppLogo from "../AppLogo";

import { useState } from "react";
const Register = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

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
            Already have an account? <a href="./login">Login now</a>
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
