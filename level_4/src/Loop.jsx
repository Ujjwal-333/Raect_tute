import React from 'react'
import User from "./User.jsx"

const Loop = () => {
    const userName = ["Ujjwal", "Rohit", "Saurabh", "Ankit", "Ramesh"]
    const userData = [{
        name: "Ujjwal",
        email: "ujjwal@gmail.com",
        age:22,
        id:1,
    },
{
 name:"Rohit",
 email:"rohit@gmail.com",
 age:23,
 id:2,


},
{
    name:"Saurabh",
    email:"saurabh@gmail.com",
    age:24,
    id:3,
},

{
    name:"Ankit",
    email:"ankit@gmail.com",
    age:25,
    id:4,
},
{
    name:"Ramesh",
    email:"ramesh@gmail.com",
    age:26,
    id:5,
}
]
  return (
    <div>
      <h3>User Data:</h3>
      <ul>
        {userName.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
         <h3>Using loop</h3>
      <table border="1">
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Age</td>
            </tr>
        </thead>
        {/* It's an normal approach */}
        {/* <tbody>
            <tr>
                <td>1</td>
                <td>Ujjwal</td>
                <td>ujjwal@gmail.com</td>
                <td>22</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>1</td>
                <td>Rohit</td>
                <td>rohit@gmail.com</td>
                <td>23</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>1</td>
                <td>Saurabh</td>
                <td>saurabh@gmail.com</td>
                <td>24</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>1</td>
                <td>Ankit</td>
                <td>ankit@gmail.com</td>
                <td>25</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>1</td>
                <td>Ramesh</td>
                <td>ramesh@gmail.com</td>
                <td>26</td>
            </tr>
        </tbody> */}

         
        <tbody>
            {userData.map((user)=>(
                <tr key={user.id}>
                    <td>{user.id}</td> 
                    <td>{user.name}</td> 
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                </tr>
            ))}
        </tbody>
      </table>

      <h2>Reuse component in loop</h2>
      {
  userData.map((user) => (
    <div key={user.id}>
      <User data={user} />
    </div>
  ))
}
    </div>
  )
}

export default Loop