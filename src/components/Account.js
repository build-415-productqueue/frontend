import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import axios from 'axios'
import '../styles/account.css'
import { updateUser } from '../actions'

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      user: {
        email: '',
        company: '',
        first_name: '',
        last_name: '',
        id: ''
      },
      token: ''
    }
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('data'))
    const token = localStorage.getItem('token')
    this.setState({
      user: {
        email: user.email,
        company: user.company,
        first_name: user.first_name,
        last_name: user.last_name,
        id: user.id
      },
      token: token
    })
  }

  updateUser = e => {
    e.preventDefault()
    this.props.updateUser(this.state.user, this.state.token)
    this.setState({
      disabled: true
    })
  }

  changeHandler = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }

  editHandler = () => {
    if (!this.state.disabled) {
      const { email, first_name, company, last_name } = this.props.user
      this.setState({
        user: {
          email: email,
          first_name: first_name,
          last_name: last_name,
          company: company
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
      <div className="accform">
        <fieldset disabled={this.state.disabled}>
          <form onSubmit={this.updateUser}>
            <div className="accheader">
              <h3>Account Settings</h3>
              <p>Just hit the "Edit" button to change your account details.</p>
            </div>
            <p
              className={`${this.state.disabled ? 'edit' : 'cancel'}`}
              onClick={() => this.editHandler()}
            >
              {this.state.disabled ? 'EDIT' : 'CANCEL'}
            </p>

            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              onChange={this.changeHandler}
              defaultValue={this.state.user.first_name}
              disabled={this.state.disabled}
            />

            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              onChange={this.changeHandler}
              defaultValue={this.state.user.last_name}
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
            {this.state.disabled ? null : <button type="submit">Submit</button>}
          </form>
        </fieldset>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.user.token
  }
}

export default connect(
  mapStateToProps,
  { updateUser }
)(Account)
