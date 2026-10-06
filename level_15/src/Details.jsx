import React from 'react'

const Details = () => {

  const detailsStyle = {
    textAlign: "center",
    marginTop: "30px",
    padding: "20px"
  }

  const headingStyle = {
    color: "purple",
    fontSize: "30px"
  }

  return (
    <div style={detailsStyle}>
      <h1 style={headingStyle}>College Details</h1>

      <p>Welcome to the College Details section.</p>

      <p>
        Here you can find information about the college,
        its facilities, courses and other important details.
      </p>
    </div>
  )
}

export default Details