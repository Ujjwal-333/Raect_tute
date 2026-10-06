import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {

    const headingStyle = {
    marginTop: "50px",
    marginBottom: "5px",
    textAlign: "center"
  }

  const imageStyle = {
    width: "400px",
    maxWidth: "90%"
  }
  return (
    <div
    style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      width:"100%",

    }}


    
    >
        <h1 style={headingStyle}>404 | Page Not Found</h1>
        <h2>404 Error</h2>
        <img style={imageStyle} src='https://assets-v2.lottiefiles.com/a/6915cc2c-1178-11ee-a783-6b784bd85af7/vUmMyG7Nho.gif' alt="404 Error"/>
      <div>
         <Link  to="/">
          <h1>Go to Home Page </h1>
        </Link>
      </div>

      
    </div>
  )
}

export default PageNotFound