
import React, { useState } from "react";

const UserAdd = () => {
  const [title, setTitle] = useState("");
  const [views, setViews] = useState("");

  const createUser = async () => {
    if (!title || !views) {
      alert("Please enter title and views");
      return;
    }

    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        views: Number(views),
      }),
    });

    if (response.ok) {
      alert("Post Added Successfully");

      setTitle("");
      setViews("");
    }
  };

  const boxStyle = {
    width: "400px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f8fafc",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    boxSizing: "border-box",
    border: "1px solid #bbb",
    borderRadius: "6px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div>
      <h1 style={{ color: "#2563eb" }}>Add New Post</h1>

      <div style={boxStyle}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Enter views"
          value={views}
          onChange={(e) => setViews(e.target.value)}
          style={inputStyle}
        />

        <button onClick={createUser} style={buttonStyle}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default UserAdd;

