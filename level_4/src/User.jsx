import React from "react";

const User = (data) => {
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "10px",
        margin: "10px",
        width: "400px",
        borderRadius: "10px",
      }}
    >
      {/* pehla data  → props object
     ↓
doosra data → prop ka naam
     ↓
name        → user object ki property */}

      <h3>
        Name:<span style={{ color: "green" }}>{data.data.name}</span>
      </h3>
      <h3>
        Age:<span style={{ color: "green" }}>{data.data.age}</span>
      </h3>
      <h3>
        Email:<span style={{ color: "green" }}>{data.data.email}</span>
      </h3>
    </div>
  );
};

export default User;
