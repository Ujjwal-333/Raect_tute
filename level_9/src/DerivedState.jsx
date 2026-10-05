import React,{useState} from 'react'


const DerivedState = () => {

    const [users,setUsers] = useState([]);
    const [user,setUser] = useState("");

    const handleAddUser =()=>{
setUsers([...users,user])
    }
    const total=user.length
    // const last =user.length
    // const unique=user.length

    const total1=users.length
    const last1 =users[users.length-1];
    const unique1=[...new Set(users)].length
  return (
    <>
    <h1>Total letter:{total} </h1>

    <h2>Total User:{total1}</h2>

    <h2>Last user :{last1}</h2>
    <h2>Unique Total User: {unique1}</h2>
    <input onChange={(event)=>setUser(event.target.value)} placeholder='Add new user'></input>
    <button onClick={handleAddUser}>Add User</button>

    {
        users.map((item, index)=>(
            <h4 key={index}>{item}</h4>
        ))
    }
    
    </>
  )
}

export default DerivedState