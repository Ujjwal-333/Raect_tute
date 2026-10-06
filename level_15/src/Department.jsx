import React from 'react'

const Department = () => {

  const departmentStyle = {
    textAlign: "center",
    marginTop: "30px",
    padding: "20px"
  }

  const headingStyle = {
    color: "green",
    fontSize: "30px"
  }

  return (
    <div style={departmentStyle}>
      <h1 style={headingStyle}>Department</h1>

      <p>Welcome to the Department section.</p>

      <p>
        Here you can explore different departments
        available in our college.
      </p>
    </div>
  )
}

export default Department