
import React, { useEffect, useState } from "react";

const UserList = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getPosts();
  }, []);


  // Get Posts
  const getPosts = async () => {

    setLoading(true);

    const response = await fetch("http://localhost:3000/posts");

    const result = await response.json();

    setPosts(result);

    setLoading(false);
  };


  // Delete User
  const deleteUser = async (id) => {

    const response = await fetch(
      `http://localhost:3000/posts/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {

      // UI se bhi delete karna
      const newPosts = posts.filter((post) => {
        return post.id !== id;
      });

      setPosts(newPosts);

      alert("Post Deleted Successfully");
    }
  };


  // UL styling
  const ulStyle = {
    padding: "0",
    width: "500px",
  };


  // LI styling
  const liStyle = {
    listStyle: "none",
    padding: "15px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f1f5f9",
  };


  // Delete button styling
  const deleteButtonStyle = {
    marginTop: "10px",
    padding: "8px 15px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#dc2626",
    color: "white",
    cursor: "pointer",
  };


  return (
    <div>

      <h1 style={{ color: "#2563eb" }}>
        Post List
      </h1>


      {loading ? (

        <h2>Data Loading...</h2>

      ) : (

        <ul style={ulStyle}>

          {posts.map((post) => (

            <li key={post.id} style={liStyle}>

              <b>ID:</b> {post.id}

              <br />

              <b>Title:</b> {post.title}

              <br />

              <b>Views:</b> {post.views}

              <br />


              <button
                onClick={() => deleteUser(post.id)}
                style={deleteButtonStyle}
              >
                Delete User
              </button>

            </li>

          ))}

        </ul>

      )}

    </div>
  );
};

export default UserList;

