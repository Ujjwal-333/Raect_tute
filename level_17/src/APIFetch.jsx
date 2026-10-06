
import React, { useEffect, useState } from "react";

const APIFetch = () => {

  // Main container
  const containerStyle = {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "25px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  // Heading
  const headingStyle = {
    textAlign: "center",
    color: "#1e293b",
    marginBottom: "25px",
  };

  // Table heading
  const listHeading = {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 1fr",
    listStyle: "none",
    margin: "0",
    padding: "12px 15px",
    backgroundColor: "#2563eb",
    color: "white",
    fontWeight: "bold",
    borderRadius: "8px 8px 0 0",
  };

  // User rows
  const listStyle = {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 1fr",
    listStyle: "none",
    margin: "0",
    padding: "14px 15px",
    borderBottom: "1px solid #e2e8f0",
    color: "#334155",
  };

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const url = "https://dummyjson.com/users";

    let response = await fetch(url);
    response = await response.json();

    setUsersData(response.users);
  }

  console.log(usersData);

  return (
    <div style={containerStyle}>

      <h1 style={headingStyle}>
        👨‍💻 Users Data
      </h1>

      {/* Table Heading */}
      <ul style={listHeading}>
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
      </ul>

      {/* Users Data */}
      {
        usersData.map((user) => (
          <ul
            key={user.id}
            style={listStyle}
          >
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
          </ul>
        ))
      }

    </div>
  );
};

export default APIFetch;

