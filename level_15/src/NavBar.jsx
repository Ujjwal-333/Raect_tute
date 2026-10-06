import React from "react";
import { Link, Outlet,NavLink } from "react-router-dom";
import "./Header.css";

const NavBar = () => {
  return (
    <div>
      <div className="header">
        <div>
          <NavLink className="link" to="/">
            <h1>logo</h1>
          </NavLink>
        </div>

        <div>
          <ul>
            <li>
              {/* custom active link */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link home-active" : "link"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </li>

            <li>
              {/* In login mene prefix route use kiya hai */}
              <NavLink className="link" to="/in/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/college">
                College
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user">
                User
              </NavLink>
            </li>
            <li>
              <Link className="link" to="/user/list">
                List
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <Outlet /> parent component ke andar child route ko dikhane ki jagah hai. */}
      <Outlet />
    </div>
  );
};

export default NavBar;

// Link:
// Link ka use ek page se dusre page par navigate karne ke liye hota hai.
// Isme active link ki information automatically nahi milti.
// Example:
// <Link to="/about">About</Link>

// NavLink:
// NavLink bhi navigation ke liye use hota hai,
// lekin ye automatically pata laga sakta hai ki current page kaunsa hai.
// Isliye active link par CSS/style apply karne ke liye NavLink useful hai.
// Example:
// <NavLink to="/about">About</NavLink>

// Main Difference:
// Link -> Simple navigation ke liye.
// NavLink -> Navigation + active link ko identify/style karne ke liye.
