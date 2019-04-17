import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import axios from 'axios'
import '../styles/account.css'

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      project: {
        projectTitle: '',
        submittedBy: '',
        company: '',
        description: '',
        status: '',
        dateSubmitted: '',
        lastUpdated: '',
        links: '',
        github: '',
        heroku: '',
        comments: []
      }
    }
  }

  componentDidMount() {}

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
          github: '',
          heroku: '',
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

            <h2>Project Title</h2>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              onChange={this.changeHandler}
              defaultValue={this.state.project.projectTitle}
              disabled={this.state.disabled}
            />

            <label htmlFor="submittedBy">Submitted By:</label>
            <input
              type="text"
              id="submittedBy"
              name="submittedBy"
              onChange={this.changeHandler}
              defaultValue={this.state.project.submittedBy}
              disabled={this.state.disabled}
            />

            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              onChange={this.changeHandler}
              defaultValue={this.state.project.company}
              disabled={this.state.disabled}
            />

            <label htmlFor="description"> Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={this.changeHandler}
              defaultValue={this.state.project.description}
              disabled={this.state.disabled}
            />

            <label htmlFor="status"> Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              onChange={this.changeHandler}
              defaultValue={this.state.project.status}
              disabled={this.state.disabled}
            />

            <label htmlFor="dateSubmitted"> Date Submitted:</label>
            <input
              type="text"
              id="dateSubmitted"
              name="dateSubmitted"
              onChange={this.changeHandler}
              defaultValue={this.state.project.dateSubmitted}
              disabled={this.state.disabled}
            />

            <label htmlFor="lastUpdated"> Last Updated:</label>
            <input
              type="text"
              id="lastUpdated"
              name="lastUpdated"
              onChange={this.changeHandler}
              defaultValue={this.state.project.lastUpdated}
              disabled={this.state.disabled}
            />

            <h2> Project Links </h2>

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

            <label htmlFor="heroku"> Heroku App:</label>
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
