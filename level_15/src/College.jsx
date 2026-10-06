import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import "./College.css";

const College = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>College</h1>

        <h3>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
          >
            Go back to Home
          </Link>
        </h3>
      </div>

      <div className="college-nav">
        <NavLink className="college-link" to="/college/student">
          Student
        </NavLink>

        <NavLink className="college-link" to="/college/department">
          Department
        </NavLink>

        <NavLink className="college-link" to="/college/details">
          College Details
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default College;