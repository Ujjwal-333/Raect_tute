import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  const userData = [
    {
      id: 1,
      name: "Rahul",
      position: "Developer",
    },
    {
      id: 2,
      name: "Rakesh",
      position: "senior Engineer",
    },
    {
      id: 3,
      name: "Lokesh",
      position: "Junior Engineer",
    },
    {
      id: 4,
      name: "Rahul",
      position: "Itern",
    },
  ];
  return (
    <div style={{ margin: "10px" }}>
      <h1>User List Page</h1>

      {userData.map((item) => {
        return (
          <div key={item.id}>
            <h3>
              {" "}
              <Link to={`/user/${item.id}`}>{item.name}</Link>
            </h3>
            <p>{item.position}</p>
          </div>
        );
      })}

      <h1>User List Page With name in URL</h1>

      {userData.map((item) => {
        return (
          <div key={item.id}>
            <h3>
              <Link to={`/user/${item.id}/${item.name}`}>{item.name}</Link>
            </h3>
            <p>{item.position}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
