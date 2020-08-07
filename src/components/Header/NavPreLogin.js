import React from 'react'
import {NavLink} from 'react-router-dom'

const NavPreLogin = () => {
  return (
    <nav className="nav">
      <div className="nav-item">
      <NavLink to="/register">
        <div>Register</div>
      </NavLink>
      </div>
      <div className="nav-item">
      <NavLink to='/login'>
        <div>Log In</div>
      </NavLink>
      </div>
    </nav>
  )
}

export default NavPreLogin