import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import PrivateRoute from './components/PrivateRoute'
import DashBoard from './components/DashBoard'
import Project from './components/Project'
import AddProjectForm from './components/AddProjectForm'
import AccountDetails from './components/AccountDetails'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
          <PrivateRoute
            exact
            path="/account/details"
            component={AccountDetails}
          />
          <PrivateRoute exact path="/dashboard" component={DashBoard} />
          <PrivateRoute exact path="/add-project" component={AddProjectForm} />
          <PrivateRoute exact path="/project-details/:id" component={Project} />
        </div>
      </Router>
    )
  }
}

export default App
