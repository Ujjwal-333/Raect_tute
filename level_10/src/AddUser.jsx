import React from 'react'

const AddUser = ({setUser}) => {
  return (
    <>
    <h1>Add User</h1>
    <input type='text' onChange={(event)=>setUser(event.target.value)} placeholder='Enter User'></input>
    <hr></hr>


    </>
  )
}

export default AddUser