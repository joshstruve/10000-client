import React from 'react'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import Header from '../components/Header/Header'

class RegistrationPage extends React.Component {

  render() {    
    return (
        <div className="container">
            <Header />
            <div className='hero'>
            <div className="form-container">
                <h2>Register</h2>
                <RegistrationForm {...this.props}/>
            </div>
            </div>
      </div>
    )
  }
}

export default RegistrationPage