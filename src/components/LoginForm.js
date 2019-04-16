import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../actions'
import '../styles/regform.css'

class LoginForm extends Component {
  state = {
    credentials: {
      email: '',
      password: ''
    }
  }

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  onLogin = e => {
    e.preventDefault()
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push('/dashboard')
    })
  }

  render() {
    return (
      <div className="regform">
        <form onSubmit={this.onLogin}>
          <div className="regheader">
            <h3>Sign In</h3>
            <p>
              Sign in below to access your dashboard. Don't have an account yet?{' '}
              <Link to="/">Create one here.</Link>
            </p>
          </div>
          <label for="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email Address"
            value={this.state.credentials.email}
            onChange={this.handleChanges}
          />
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <button>Log In</button>
        </form>
        <div />
      </div>
    )
  }
}

export default connect(
  null,
  { login }
)(LoginForm)
