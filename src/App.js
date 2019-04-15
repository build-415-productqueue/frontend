import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import PrivateRoute from './components/PrivateRoute'
import DashBoard from './components/DashBoard'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
          <PrivateRoute exact path={`/account/details`} />
          <PrivateRoute exact path={`/dashboard`} component={DashBoard} />
          <PrivateRoute exact path={`/add-project`} />
          <PrivateRoute exact path={`/project-details/:id`} />
        </div>
      </Router>
    )
  }
}

export default App
