import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/regform.css'
import propTypes from 'prop-types'
import axios from 'axios'

class AccountDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      loading: false,
      error: false,
      success: false,
      user: {
        email: 'test@test.com',
        company: 'Test',
        name: 'Test Testing'
      }
    }
  }

  changeHandler = e => {
    e.preventDefault()
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }

  editHandler = () => {
    if (!this.state.disabled) {
      this.setState({
        user: {
          email: this.state.user.email,
          name: this.state.user.name,
          company: this.state.user.company
        },
        disabled: true
      })
    } else {
      this.setState({
        disabled: false
      })
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Hello, {this.state.user.name}</h1>
        <div className="regform">
          <fieldset disabled={this.state.disabled}>
            <form>
              <p className="edit" onClick={() => this.editHandler()}>
                {this.state.disabled ? 'EDIT' : 'CANCEL'}
              </p>

              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.changeHandler}
                defaultValue={this.state.user.name}
                disabled={this.state.disabled}
              />

              <label htmlFor="email">Contact Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ex. example@example.com"
                onChange={this.changeHandler}
                defaultValue={this.state.user.email}
                disabled={this.state.disabled}
                aria-label="email"
              />

              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                onChange={this.changeHandler}
                defaultValue={this.state.user.company}
                disabled={this.state.disabled}
              />
              {this.state.disabled ? null : (
                <button type="submit">Submit</button>
              )}
            </form>
          </fieldset>
        </div>
      </div>
    )
  }
}

export default AccountDetails
