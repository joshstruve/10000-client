import React from 'react'
import {NavLink} from 'react-router-dom'
import TokenService from '../../services/token-service'

export default class NavPostLogin extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.setState({})
  }

  render() {
    return (
      <div className='nav'>
        <div className="nav-item">
        <NavLink to='/skills'>
          <div>Skills</div>
        </NavLink>
        </div>
        <div className="nav-item">
        <NavLink onClick={this.handleLogoutClick} to='/' >
          <div>Log Out</div>
        </NavLink>
        </div>
      </div>
    )
  }  
}