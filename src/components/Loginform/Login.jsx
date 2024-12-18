import React from "react";
import "./Login.css";
import "./index.css"
import { CiUser } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
// import { FaUserAlt } from "react-icons/fa";
const Login = () => {
  return (
    <div className="wrapper ">
      <form action=" ">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="username " required />
          {/* <FaUserAlt /> */}
          <CiUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password " placeholder="Password " required />
          <FaLock className="icon"/>
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
          <a href="https://visitcount.itsvg.in">
  <img src="https://visitcount.itsvg.in/api?id=alinaasrzad&label=alinaasrzad&color=10&icon=1&pretty=false" />
</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
