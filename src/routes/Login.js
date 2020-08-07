import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import Header from '../components/Header/Header'

export default class LoginPage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    this.props.handleLogIn(this.props.history)
  }

  render() {
    return (
      <div className="container">
            <Header />
          <div className='hero'>
            <div className="form-container">
            <h2>Log In</h2>
            <LoginForm onLoginSuccess={this.handleLoginSuccess} />
            <h4>Demo Account</h4>
            <p>email@email.com<br></br>Password1!</p>
        </div>
        </div>
      </div>
    )
  }
}