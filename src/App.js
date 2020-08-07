import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'

import Home from './components/Home/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import Skills from './routes/Skills'
import AddSkill from './routes/AddSkill'

import PublicOnlyRoute from './components/Utils/PublicOnlyRoute';
import PrivateRoute from './components/Utils/PrivateRoute';
import TokenService from './services/token-service';

export default class App extends Component {
  state = {
    loggedInToggle:false,
  }

  handleLogIn = (history) => {
    this.setState({loggedInToggle:true})

    history.push('/skills')
  }

  handleLogout = () => {
    TokenService.clearAuthToken()
    this.setState({loggedInToggle:false})
  }

  render() {
    return (
      <main className="App">
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/skills' component={Skills} />
        <Route path='/addskill' component={AddSkill} />
        <Route path='/login' component={props => <Login {...props} handleLogIn={this.handleLogIn}/>}/>
        <Route path='/register' component={props => <Register {...props} handleLogIn={this.handleLogIn}/>}/>
        </Switch>
      </main>
    );
  }
}

