import React from 'react'
import {useEffect, useState} from "react"

const Task2clock = ({color}) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    useEffect(()=>{
        setInterval(()=>{
setTime(new Date().toLocaleTimeString())
        },(1000))
         
    },[])
  
  return (
    <>

     
    <h1
    style={{color:color,border:"2px solid yellow", width:"180px", padding:"10px", borderRadius:"10px",backgroundColor:"black"}}
    >{time}</h1>
    </>
  
  )
}

export default Task2clock