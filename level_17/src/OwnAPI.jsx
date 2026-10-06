
import React, { useEffect, useState } from "react";

const OwnAPI = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);

    await getPosts();
    await getComments();
    await getProfile();

    setLoading(false);
  }

  async function getPosts() {
    const response = await fetch("http://localhost:3000/posts");
    const result = await response.json();

    setPosts(result);
  }

  async function getComments() {
    const response = await fetch("http://localhost:3000/comments");
    const result = await response.json();

    setComments(result);
  }

  async function getProfile() {
    const response = await fetch("http://localhost:3000/profile");
    const result = await response.json();

    setProfile(result);
  }

  const ulStyle = {
    padding: "0",
    maxWidth: "500px"
  };

  const liStyle = {
    listStyle: "none",
    padding: "12px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    backgroundColor: "#f5f5f5"
  };

  return (
    <>
      <h1>API Data</h1>

      {loading ? (
        <h1>Data Loading...</h1>
      ) : (
        <>
          {/* POSTS */}
          <h2>Posts</h2>

          <ul style={ulStyle}>
            {posts.map((post) => (
              <li key={post.id} style={liStyle}>
                <b>ID:</b> {post.id}
                <br />
                <b>Title:</b> {post.title}
                <br />
                <b>Views:</b> {post.views}
              </li>
            ))}
          </ul>

          <hr />

          {/* COMMENTS */}
          <h2>Comments</h2>

          <ul style={ulStyle}>
            {comments.map((comment) => (
              <li key={comment.id} style={liStyle}>
                <b>ID:</b> {comment.id}
                <br />
                <b>Comment:</b> {comment.text}
                <br />
                <b>Post ID:</b> {comment.postId}
              </li>
            ))}
          </ul>

          <hr />

          {/* PROFILE */}
          <h2>Profile</h2>

          <ul style={ulStyle}>
            <li style={liStyle}>
              <b>Name:</b> {profile.name}
              <br />
              <b>Age:</b> {profile.age}
              <br />
              <b>Position:</b> {profile.position}
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default OwnAPI;


