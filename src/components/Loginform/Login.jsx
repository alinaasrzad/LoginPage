import {React} from "react";
import "./Login.css";
// import { CiUser } from "react-icons/ci";
// import { FaUserAlt } from "react-icons/fa";
const Login = () => {
  return (
    <div className="wrapper ">
      <form action="text">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="username " required />
          {/* <FaUserAlt /> */}
          {/* <CiUser /> */}
        </div>
        <div className="input-box">
          <input type="password " placeholder="Password " required />
        </div>
        <div className="remember-forgot">
          <label htmlFor="">
            <input type="checkbox" /> Rememeber me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Don't have an account
            <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
