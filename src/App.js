import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import PrivateRoute from './components/PrivateRoute'
import DashBoard from './components/DashBoard'
import Project from './components/Project'
import AddProjectForm from './components/AddProjectForm'
import Account from './components/Account'
import Nav from './components/Nav'
import Footer from './components/Footer'
import axios from 'axios'
import { connect } from 'react-redux'
import { getData } from './actions'

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem('data')) {
      this.props.getData(JSON.parse(localStorage.getItem('data')))
    }
  }

  render() {
    const RouterNav = withRouter(Nav)
    return (
      <Router>
        <div className="App">
          <RouterNav />
          <Route exact path="/" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
          <PrivateRoute exact path="/account" component={Account} />
          <PrivateRoute exact path="/dashboard" component={DashBoard} />
          <PrivateRoute exact path="/add-project" component={AddProjectForm} />
          <PrivateRoute exact path="/project-details/:id" component={Project} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect(
  null,
  { getData }
)(App)
