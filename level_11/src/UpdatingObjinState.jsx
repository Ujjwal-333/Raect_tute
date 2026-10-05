import React,{useState} from 'react'

const UpdatingObjinState = () => {
    const [data,setData]=useState({
        name:"Rahul",
        address:{
            city:"Delhi",
            country:"India",
        }
    })
    //Shallow copy deep copy
    const handleName=(val)=>{
       data.name=val
       console.log(data)
       //Create New Object
       setData({...data})
    }
    const handleCity=(city)=>{
        data.address.city=city;
        console.log(data);
        setData({...data,address:
            {...data.address,city}})
    }
  return (
    <>
    <h1>Updating Object in State</h1>
    <input type='text' placeholder='update name' onChange={(event)=>handleName(event.target.value)}></input>
      <input type='text' placeholder='update city' onChange={(event)=>handleCity(event.target.value)}></input>
    <h2>Name: {data.name}</h2>
    <h2>City: {data.address.city}</h2>
    <h2>Country: {data.address.country}</h2>
    </>
  )
}

export default UpdatingObjinState