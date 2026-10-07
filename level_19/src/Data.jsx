
import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserAdd from "./UserAdd";

const Data = () => {
  const navList = {
    display: "flex",
    gap: "30px",
    margin: "10px",
    padding: "10px",
    listStyle: "none",
    backgroundColor: "#e2e8f0",
  };

  return (
    <div>
      <ul style={navList}>
        <li>
          <NavLink to="/">List</NavLink>
        </li>

        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
      </Routes>
    </div>
  );
};

export default Data;

