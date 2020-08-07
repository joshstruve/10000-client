import React from 'react'
import config from '../../config'
import TokenService from '../../services/token-service'

export default class RegistrationForm extends React.Component {
  state = {
    error:null
  }

  handleRegistrationSubmit = (ev) => {
    ev.preventDefault()
    this.setState({error:null})
    const {email, password} = ev.target
    
    fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        email:email.value,
        password:password.value
      })
    })
    .then(res => (!res.ok)
    ? res.json().then(e => Promise.reject(e))
    : res.json())
    .then(() => {

      fetch(`${config.API_ENDPOINT}/auth/login`, {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify({
          email:email.value,
          password:password.value
        })
      })
      .then(res => (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json())
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        email.value = ''
        password.value = ''

        this.props.handleLogIn(this.props.history)
      })
      .catch(error => {
        this.setState({error})
      })      
    })
    .catch(error => {
      this.setState({error})
    })
  }

  render() {
    const {error} = this.state

    return (
      <div className="login-container">
        <form onSubmit={this.handleRegistrationSubmit} className="login-form">
          <legend></legend>
          <fieldset>
            <div className="column">
              <div>
                <label htmlFor="email" hidden>Email</label>
                <input name="email" id="email" placeholder="email"/>
              </div>
              <div>
                <label htmlFor="password" hidden>Password</label>
                <input name="password" id="password" placeholder="password" />
              </div>
              <div>
                <button className="button-primary">Register</button>
              </div>
            </div>
          </fieldset>
        </form>
        {error && <div>{error.error}</div>}
      </div>
    )
  }  
}
