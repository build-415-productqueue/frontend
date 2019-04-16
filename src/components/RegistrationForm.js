import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions'
import '../styles/regform.css'

class RegistrationForm extends Component {
  state = {
    credentials: {
      first_name: '',
      last_name: '',
      company: '',
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

  onSubmit = e => {
    e.preventDefault()
    // this.props.register(this.state.credentials).then(() => {
    this.props.history.push({
      pathname: '/login',
      state: {
        email: this.state.credentials.email,
        password: this.state.credentials.password
      }
    })
    // })
  }

  render() {
    return (
      <div className="regform">
        <form onSubmit={this.onSubmit}>
          <div className="regheader">
            <h3>User Registration</h3>
            <p>
              Get started by creating your account, or{' '}
              <Link to="/login">logging in</Link> if you already have one.
            </p>
          </div>
          <>
            <label htmlFor="first_name">First Name *</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              value={this.state.credentials.first_name}
              onChange={this.handleChanges}
            />
          </>
          <>
            <label htmlFor="last_name">Last Name *</label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={this.state.credentials.last_name}
              onChange={this.handleChanges}
            />
          </>
          <>
            <label htmlFor="company">Company Name *</label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="Company Name"
              value={this.state.credentials.company}
              onChange={this.handleChanges}
            />
          </>
          <>
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email Address"
              value={this.state.credentials.email}
              onChange={this.handleChanges}
            />
          </>
          <>
            <label htmlFor="password">Password *</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.handleChanges}
            />
          </>
          <button>Submit</button>
        </form>
        <div />
      </div>
    )
  }
}

export default connect(
  null,
  { register }
)(RegistrationForm)
