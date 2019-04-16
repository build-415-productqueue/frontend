import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions'
import '../styles/regform.css'

class RegistrationForm extends Component {
  state = {
    name: '',
    credentials: {
      first_name: '',
      last_name: '',
      company: '',
      email: '',
      password: ''
    }
  }

  nameChange = e => {
    this.setState({
      name: e.target.value
    })
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
    this.setState({
      credentials: {
        ...this.state.credentials,
        first_name: this.state.name.split(' ')[0],
        last_name: this.state.name.split(' ')[1]
      }
    })
    this.props.register(this.state.credentials).then(() => {
      this.props.history.push('/login')
    })
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
            <label for="name">Full Name *</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="First & Last Name"
              value={this.state.name}
              onChange={this.nameChange}
            />
          </>
          <>
            <label for="company">Company Name *</label>
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
            <label for="email">Email *</label>
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
            <label for="password">Password *</label>
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
