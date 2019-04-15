import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class RegistrationForm extends Component {
  state = {
    credentials: {
      name: '',
      companyName: '',
      email: '',
      password: '',
      confirmPassword: ''
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
        <p>
          Get started by creating your account, or{' '}
          <Link to="/login">logging in</Link> if you already have one.
        </p>
        <form>
          <div>
            <h3>User Registration</h3>
          </div>
          <label for="name">Name *</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={this.state.credentials.name}
            onChange={this.handleChanges}
          />
          <label for="companyName">Company Name *</label>
          <input
            id="companyName"
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={this.state.credentials.companyName}
            onChange={this.handleChanges}
          />
          <label for="email">Email *</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Your email"
            value={this.state.credentials.email}
            onChange={this.handleChanges}
          />
          <label for="password">Password *</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <label for="confirmPassword">Confirm Password *</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={this.state.credentials.confirmPassword}
            onChange={this.handleChanges}
          />
        </form>
        <div>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
