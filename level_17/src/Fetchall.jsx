
import React, { useEffect, useState } from "react";

const Fetchall = () => {

  // Main container
  const containerStyle = {
    maxWidth: "1200px",
    margin: "30px auto",
    padding: "25px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  // Page heading
  const headingStyle = {
    textAlign: "center",
    color: "#1e293b",
    marginBottom: "25px",
  };

  // Each user card
  const userStyle = {
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "white",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };

  // User heading
  const userHeading = {
    color: "#2563eb",
    marginBottom: "15px",
  };

  // Data row
  const rowStyle = {
    display: "grid",
    gridTemplateColumns: "180px 1fr",
    padding: "8px 0",
    borderBottom: "1px solid #e2e8f0",
  };

  // Label
  const labelStyle = {
    fontWeight: "bold",
    color: "#475569",
  };

  // Value
  const valueStyle = {
    color: "#334155",
    wordBreak: "break-word",
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

  return (
    <div style={containerStyle}>

      <h1 style={headingStyle}>
        👨‍💻 All Users Data
      </h1>

      {
        usersData.map((user) => (

          <div key={user.id} style={userStyle}>

            <h2 style={userHeading}>
              User ID: {user.id}
            </h2>

            {
              Object.entries(user).map(([key, value]) => (

                <div key={key} style={rowStyle}>

                  <div style={labelStyle}>
                    {key}
                  </div>

                  <div style={valueStyle}>
                    {
                      typeof value === "object"
                        ? JSON.stringify(value)
                        : value
                    }
                  </div>

                </div>

              ))
            }

          </div>

        ))
      }

    </div>
  );
};

export default Fetchall;

