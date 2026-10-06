import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const NavBar = () => {
  return (
    <div className="header">

      <div>
        <Link className="link" to="/">
          <h1>logo</h1>
        </Link>
      </div>

      <div>
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>

          <li>
            <Link className="link" to="/about">About</Link>
          </li>

          <li>
            <Link className="link" to="/login">Login</Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar