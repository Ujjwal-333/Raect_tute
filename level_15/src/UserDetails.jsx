import React from 'react'
import {useParams,Link} from "react-router-dom"

const UserDetails = () => {
    const paramData=useParams();
    console.log(paramData.id)
  return (
    <div>
        <h1>User Details</h1>
        <h3>User id : {paramData.id}</h3>
        <h3><Link to="/user">Back to User</Link></h3>

    </div>
  )
}

export default UserDetails