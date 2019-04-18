import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import axios from 'axios'
import '../styles/account.css'
import { URL } from '../actions'
import moment from 'moment'

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      project: {}
    }
  }

  componentDidMount() {
    this.setState({ project: this.props.location.state.card })
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('data'))
    const projectId = this.props.match.params.id
    axios
      .get(
        `${URL}/api/projects/${
          this.props.location.state.card.user_id
        }/${projectId}`,
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then(res => {
        this.setState({
          project: {
            ...this.state.project,
            comments: res.data.comments,
            links: res.data.links
          }
        })
      })
      .catch(err => {
        alert('something is wrong, please try again.')
      })
  }

  changeHandler = e => {
    this.setState({
      project: {
        ...this.state.project,
        [e.target.name]: e.target.value
      }
    })
  }

  editHandler = () => {
    if (!this.state.disabled) {
      this.setState({
        disabled: true
      })
    } else {
      this.setState({
        disabled: false
      })
    }
  }

  updateCheck = () => {
    if (
      !this.state.project.updated_at ||
      this.state.project.created_at === this.state.project.updated_at
    ) {
      return false
    } else {
      return true
    }
  }

  render() {
    const user = JSON.parse(localStorage.getItem('data'))
    return (
      <div className="accform">
        <fieldset disabled={this.state.disabled}>
          <form>
            <p
              className={`${this.state.disabled ? 'edit' : 'cancel'}`}
              onClick={() => this.editHandler()}
            >
              {this.state.disabled ? 'EDIT' : 'CANCEL'}
            </p>

            <h2>{this.state.project.name}</h2>

            <h6 htmlFor="submittedBy">
              {this.state.project.first_name} {this.state.project.last_name},{' '}
              {this.state.project.company}{' '}
            </h6>

            <span>
              {' '}
              Created:{' '}
              {moment(
                this.state.project.created_at,
                'YYYY-MM-DDTkk:mm:ss.SSSZ'
              ).format('MMMM Do, YYYY')}
              {this.updateCheck()
                ? ` | ${moment(
                    this.state.project.updated_at,
                    'YYYY-MM-DDTkk:mm:ss.SSSZ'
                  ).format('MMMM Do, YYYY')}`
                : null}
            </span>

            <label htmlFor="status"> Status:</label>
            <select
              id="status"
              name="status"
              disabled={this.state.disabled}
              value={this.state.project.status}
              onChange={this.changeHandler}
            >
              <option defaultValue>Select Type</option>
              <option>Pending</option>
              {user.role === 'admin' ? <option>Approved</option> : null}
              {user.role === 'admin' ? <option>Denied</option> : null}
              {user.role === 'admin' ? <option>Working</option> : null}
              {user.role === 'user' ? <option>Complete</option> : null}
            </select>

            <label htmlFor="description"> Description:</label>
            <textarea
              className="description"
              type="text"
              id="description"
              name="description"
              onChange={this.changeHandler}
              value={this.state.project.description}
              disabled={this.state.disabled}
            />

            <h4> Project Links </h4>

            <label htmlFor="links"> Links:</label>
            <input
              type="text"
              id="links"
              name="links"
              onChange={this.changeHandler}
              defaultValue={this.state.project.links}
              disabled={this.state.disabled}
            />

            <label htmlFor="github"> GitHub Repo:</label>
            <input
              type="text"
              id="github"
              name="github"
              onChange={this.changeHandler}
              defaultValue={this.state.project.github}
              disabled={this.state.disabled}
            />

            <label htmlFor="heroku"> Deployed App:</label>
            <input
              type="text"
              id="heroku"
              name="heroku"
              onChange={this.changeHandler}
              defaultValue={this.state.project.heroku}
              disabled={this.state.disabled}
            />
            {this.state.disabled ? null : <button type="submit">Submit</button>}
          </form>
        </fieldset>
      </div>
    )
  }
}

export default connect(
  null,
  {}
)(Project)
