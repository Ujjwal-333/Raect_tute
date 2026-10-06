import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import College from "./college";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import User from "./User";
import UserDetails from "./UserDetails";
import List from "./List";

function App() {
  return (
    <>
      {/* <NavBar/> */}
      <Routes>
        {/* Layout Routing jis link ko add karunga us par hi NavBar dikhega aur kahi nahi */}
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          {/* list is optional jab hum sure nahi rahte ki isko chalana hai ya nahi tab isko use kar lete "?" */}
          <Route path="/user/list?" element={<User/>}/>
          
          {/* For dynamic routing with specific  ID */}
          <Route path="/user/:id/:name?" element={<UserDetails/>}/>
          
          <Route path="/about" element={<About />} />
          <Route path="in">
             <Route path="/in/login" element={<Login />} />
          </Route>
         
        </Route>

        
        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// ==================== NESTED ROUTING ====================
// Parent Route: /college
// Child Routes: /college/student, /college/department, /college/details
//
// 1. Parent route ke andar child <Route> likho.
// 2. Child route ka path "/" se START nahi hota.
// 3. Parent component (College) mein <Outlet /> lagana zaroori hai.
// 4. Child page <Outlet /> ki jagah par render hota hai.
//
// Example:
// <Route path="/college" element={<College />}>
//   <Route path="student" element={<Student />} />
//   <Route path="department" element={<Department />} />
//   <Route path="details" element={<Details />} />
// </Route>
//
// College.jsx:
// <Outlet />
//
// NavLink:
// <NavLink to="/college/student">Student</NavLink>
// ========================================================
