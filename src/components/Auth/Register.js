import "./styles/styles.scss";
import AppLogo from "../AppLogo";
const Register = () => {
  return (
    <div className="form-container">
      <form action="#" method="post">
        <AppLogo />
        <h2>Create Account</h2>
        <div className="input-container">
          <label>Enter Full name</label>
          <input required name="fullname" type="text" />
        </div>
        <div className="input-container">
          <label>Enter Username</label>
          <input required name="username" type="text" />
        </div>
        <div className="input-container">
          <label>Enter Password</label>
          <input required name="password" type="password" />
        </div>
        <div className="input-container">
          <p>Already have an account? <a href="./login">Login now</a></p>
        </div>
        <div className="input-container">
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
