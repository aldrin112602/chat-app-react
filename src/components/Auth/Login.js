import AppLogo from "../AppLogo";
import Swal from "sweetalert2";
import CustomRequest from "../../request/CustomRequest";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/styles.scss";
const Login = () => {
  const [inputs, setInputs] = useState({});
  const [showLoginForm, setShowLoginForm] = useState(true);

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
    <div className="form-container">
      <form action="#" method="post" onSubmit={handleSubmit}>
        <AppLogo />
        <h2>Login Account</h2>
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
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
        <div className="input-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
