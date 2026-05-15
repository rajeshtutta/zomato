import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/Auth/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy Authentication
    if (email === "admin@gmail.com" && password === "123456") {

      const user = {
        email,
        token: "zomato-user-token",
      };

      localStorage.setItem("zomatoUser", JSON.stringify(user));

      dispatch(loginSuccess(user));

      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-4 mx-auto shadow p-4 rounded">
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-danger w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
