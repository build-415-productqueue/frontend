import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
        </div>
      </Router>
    )
  }
}

export default App
