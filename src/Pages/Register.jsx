import React, { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [userData, setUserData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleRegister = (e) => {

    e.preventDefault();

    const users =
      JSON.parse(
        localStorage.getItem(
          "zomatoUsers"
        )
      ) || [];

    const userExists = users.find(
      (user) =>
        user.email === userData.email
    );

    if (userExists) {

      alert("User already exists");

      return;
    }

    users.push(userData);

    localStorage.setItem(
      "zomatoUsers",
      JSON.stringify(users)
    );

    alert("Registration Successful");

    navigate("/login");
  };

  return (

    <div className="container mt-5">

      <div className="col-md-4 mx-auto shadow p-4 rounded">

        <h2 className="text-center mb-4">
          Register
        </h2>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="form-control mb-3"
            value={userData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-control mb-3"
            value={userData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-control mb-3"
            value={userData.password}
            onChange={handleChange}
          />

          <button className="btn btn-danger w-100">
            Register
          </button>

        </form>

        <p className="text-center mt-3">

          Already have an account?

          <Link to="/login">
            {" "}Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;
