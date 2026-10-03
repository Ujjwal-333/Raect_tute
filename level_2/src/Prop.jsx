import React from 'react'
// Prop component is a child component that receives props from the parent component (App.jsx) we also use props in the child component to access the data passed from the parent component or we normally ({name, age}) destructure the props in the child component to access the data passed from the parent component <h1>{name}</h1>, <h1>{age}</h1> we can also use props in the child component to access the data passed from the parent component <h1>{props.name}</h1>, <h1>{props.age}</h1>
const Prop = (props) => {
  return (
    <>
    {/* child component receiving props from parent */}
      <h1>Prop</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>  
      <p>Email: {props.email}</p> 
       

    </>
  )
}

export default Prop