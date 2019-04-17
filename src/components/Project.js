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
      info: {},
      project: {
        projectTitle: '',
        submittedBy: '',
        company: '',
        description: '',
        status: '',
        dateSubmitted: '',
        lastUpdated: '',
        links: '',
        comments: []
      }
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('data'))
    const projectId = this.props.match.params.id
    axios
      .get(`${URL}/api/projects/${user.id}/${projectId}`, {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        console.log(res.data)
        this.setState({
          info: res.data
        })
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
        project: {
          projectTitle: '',
          submittedBy: '',
          company: '',
          description: '',
          status: '',
          dateSubmitted: '',
          lastUpdated: '',
          links: '',
          comments: []
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
          <form>
            <p
              className={`${this.state.disabled ? 'edit' : 'cancel'}`}
              onClick={() => this.editHandler()}
            >
              {this.state.disabled ? 'EDIT' : 'CANCEL'}
            </p>

            <h2>{this.state.info.name}</h2>
            <p>
              {' '}
              Date created:{' '}
              {moment(
                this.state.info.created_at,
                'YYYY-MM-DDTkk:mm:ss.SSSZ'
              ).format('MMMM Do YYYY')}{' '}
              | Last Updated:
            </p>
            <label htmlFor="status"> Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              onChange={this.changeHandler}
              defaultValue={this.state.info.status}
              disabled={this.state.disabled}
            />

            <h6 htmlFor="submittedBy">Submitted By: </h6>

            <h6 htmlFor="company">Company:</h6>

            <label htmlFor="description"> Description:</label>
            <textarea
              className="description"
              type="text"
              id="description"
              name="description"
              onChange={this.changeHandler}
              defaultValue={this.state.info.description}
              disabled={this.state.disabled}
            />

            <h2> Project Links </h2>

            <label htmlFor="links"> Links:</label>
            <input
              type="text"
              id="links"
              name="links"
              onChange={this.changeHandler}
              defaultValue={this.state.info.links}
              disabled={this.state.disabled}
            />

            <label htmlFor="github"> GitHub Repo:</label>
            <input
              type="text"
              id="github"
              name="github"
              onChange={this.changeHandler}
              defaultValue={this.state.info.github}
              disabled={this.state.disabled}
            />

            <label htmlFor="heroku"> Heroku App:</label>
            <input
              type="text"
              id="heroku"
              name="heroku"
              onChange={this.changeHandler}
              defaultValue={this.state.info.heroku}
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
