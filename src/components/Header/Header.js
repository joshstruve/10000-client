import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import NavPostLogin from './NavPostLogin'
import NavPreLogin from './NavPreLogin'


export default class Header extends Component {
  state = {
    loggedInStatus:false
  }

  handleLogout = () => {
    TokenService.clearAuthToken()
    this.setState({loggedInStatus:false})
  }
  
  render() {
    return (
        <div className='header'>
          <div className='logo'>
          <Link className ="nav" to='/'>
              10000
          </Link>
          </div>
          {TokenService.hasAuthToken()
            ?<NavPostLogin handleLogout={this.props.handleLogout}/>
            :<NavPreLogin />}
        </div>
    )
  }
}