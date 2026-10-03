import React from 'react'

const College = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Location: {props.location}</p>
      <p>Courses: {props.courses?.join(", ")}</p>
    </div>
  )
}

export default College