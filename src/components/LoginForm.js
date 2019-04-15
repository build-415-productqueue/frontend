import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class LoginForm extends Component {
  state = {
    credentials: {
      name: '',
      companyName: '',
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

  render() {
    return (
      <div>
        <form>
          <div>
            <h3>Sign In</h3>
            <p>
              Sign in below to access your dashboard. Don't have an account yet?{' '}
              <Link to="/register">Create one here.</Link>
            </p>
          </div>
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={this.state.credentials.name}
            onChange={this.handleChanges}
          />
          <label for="companyName">Company Name</label>
          <input
            id="companyName"
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={this.state.credentials.companyName}
            onChange={this.handleChanges}
          />
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
        </form>
        <div>
          <button>Log In</button>
        </div>
      </div>
    )
  }
}

export default LoginForm
