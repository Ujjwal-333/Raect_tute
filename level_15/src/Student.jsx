import React from 'react'

const Student = () => {

  const studentStyle = {
    textAlign: "center",
    marginTop: "30px",
    padding: "20px"
  }

  const headingStyle = {
    color: "blue",
    fontSize: "30px"
  }

  return (
    <div style={studentStyle}>
      <h1 style={headingStyle}>Student</h1>

      <p>Welcome to the Student section of our college.</p>

      <p>
        Here you can find information about students,
        their courses and academic details.
      </p>
    </div>
  )
}

export default Student