import React, { useState } from "react";
import "./Header.scss";

import Logo from "../../assets/images/Zomato-Logo.png";
import blackLogo from "../../assets/images/blackLogo.webp";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/authActions";

import { Link } from "react-router-dom";

const Header = () => {

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const isAuth = useSelector(
    (store) => store.auth.isAuth
  );

  const handleLogout = () => {

    dispatch(logout());
  };

  return (

    <div className="header">

      <nav>

        <span>Get the App</span>

        <div className="right">

          <span>Investor Relations</span>

          <span>Add restaurant</span>

          {
            isAuth ? (

              <button
                className="logoutBtn"
                onClick={handleLogout}
              >
                Logout
              </button>

            ) : (

              <>

                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Sign Up
                </Link>

              </>

            )
          }

        </div>

      </nav>

      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
      >

        {
          open
            ? <CloseIcon style={{ color: "black" }} />
            : <MenuIcon />
        }

      </div>

      {
        open && (

          <div className="sideMenu">

            <img src={blackLogo} alt="logo" />

            <div className="innerMenu">

              <span>Investor Relations</span>

              <span>Add restaurants</span>

              {
                isAuth ? (

                  <button
                    className="logoutBtn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>

                ) : (

                  <>

                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      Sign Up
                    </Link>

                  </>

                )
              }

            </div>

          </div>
        )
      }

      <div className="headerContent">

        <img src={Logo} alt="logo" />

        <h3>
          Discover the best food & drinks in Patna
        </h3>

        <div className="input">

          <select>

            <option value="Chennai">
              Chennai
            </option>

            <option value="Jaipur">
              Jaipur
            </option>

            <option value="Delhi">
              Delhi
            </option>

            <option value="Mumbai">
              Mumbai
            </option>

            <option value="Kolkata">
              Kolkata
            </option>

          </select>

          |

          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
          />

        </div>

      </div>

    </div>
  );
};

export default Header;
