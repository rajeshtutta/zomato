import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/Auth/authActions";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(loginSuccess());
      navigate("/");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="loginPage">
      <div className="overlay"></div>

      <div className="loginBox">
        <div className="loginTop">
          <h1>Login</h1>
          <span>X</span>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="emailBtn">
          Continue with Email
        </button>

        <button className="googleBtn">
          Sign in with Google
        </button>

        <p>
          New to Zomato?
          <Link to="/register"> Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
