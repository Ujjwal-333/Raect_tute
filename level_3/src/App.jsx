import React from 'react'
import User from './User'
import Student from './Student'


function App() {
  

  return (
    <>
    <h1>Props in React</h1>
    <User name="Ujjwal" age={22} />
    <Student color="red">
      <h3>Hello Ujjwal</h3>

    </Student>
     <Student color="blue">
      <h3>Hello Kunal</h3>

    </Student>
     <Student color="green">
      <h3>Hello Diya</h3>

    </Student>
     <Student color="yellow">
      <h3>Hello Rakesh</h3>

    </Student>
    </>
  )
}

export default App
