import React from 'react'
import User from './User.jsx'
import Prop from './Prop.jsx'
import College from './College.jsx'


function App() {
  const userObject = {
    name: "Ujjwal",
    age: 22,
    email: "ujjwalpandey5690@gmail.com",
  }

  const userObject2 = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
  }

  const college = {
    name: "ABC College",
    location: "New York",
    courses: ["Computer Science", "Mathematics", "Physics"]
  }

// const name1="John Doe";
// const age=30;
// const email="ujjwallpandey56@gmail.com";
  return (
    <>
    <h1>App</h1>
    <College {...college} />
    {/* <Prop
  name={college.name}
  location={college.location}
  courses={college.courses}
/> */}
    <hr/>
    {/* <User /> */}
    {/* passing props to the Prop component we write Prop and use different names like name and age this a parent-child relationship */}
    {/* <Prop name="Ujjwal" age={22} email="ujjwal@example.com" /> */}
    {/* <Prop name={name1} age={age} email={email} /> */}
    {/* <Prop name={userObject.name} age={userObject.age} email={userObject.email} /> */}

    <Prop {...userObject} />
    <hr/>
    <Prop {...userObject2} />
    <hr/>
      </>
  )
}

export default App
