import './styles/styles.scss'
import AppLogo from '../AppLogo';
const Login = () => {
  return (
    <div className="form-container">
      <form action="#" method="post">
        <AppLogo />
        <h2>Login Account</h2>
        <div className="input-container">
          <label>Enter Username</label>
          <input required name="username" type="text" />
        </div>
        <div className="input-container">
          <label>Enter Password</label>
          <input required name="password" type="password" />
        </div>
        <div className="input-container">
          <p>
            Don't have an account? <a href="./signup">Signup now</a>
          </p>
        </div>
        <div className="input-container">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
