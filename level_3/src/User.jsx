import React from 'react'

const User = (props= { name: "Hi, User", age: 0 }) => {
  return (
    <div>
        <h1>User Component</h1>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p> 
    </div>
  )
}

export default User