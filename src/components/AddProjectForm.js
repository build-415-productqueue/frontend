import React, { Component } from 'react'
import { addProject } from '../actions'
import { connect } from 'react-redux'

import '../styles/addform.css'

class AddProjectForm extends Component {
  state = {
    linkCount: 0,
    token: '',
    userId: '',
    input: {
      project_name: '',
      description: '',
      links: {},
      files: ''
    }
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('data'))
    const token = localStorage.getItem('token')
    this.setState({
      token: token,
      userId: user.id
    })
  }

  linkChanges = e => {
    this.setState({
      input: {
        ...this.state.input,
        links: {
          ...this.state.input.links,
          [e.target.id]: {
            ...this.state.input.links[e.target.id],
            [e.target.name]: e.target.value
          }
        }
      }
    })
  }

  addLink = e => {
    e.preventDefault()
    this.setState({
      linkCount: this.state.linkCount + 1,
      input: {
        ...this.state.input,
        links: {
          ...this.state.input.links,
          [`link${this.state.linkCount + 1}`]: {
            link_type: '',
            link_href: ''
          }
        }
      }
    })
  }

  submitAdd = e => {
    e.preventDefault()
    const project = {
      name: this.state.input.project_name,
      description: this.state.input.description,
      links: Object.values(this.state.input.links)
    }
    this.props
      .addProject(project, this.state.userId, this.state.token)
      .then(() => {
        this.props.history.push('/dashboard')
      })
  }

  handleChanges = e => {
    this.setState({
      input: {
        ...this.state.input,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div className="addform">
        <form onSubmit={this.submitAdd}>
          <div className="addheader">
            <h2>Submit Your Project</h2>
          </div>
          <>
            <label htmlFor="project_name">Project Name</label>
            <input
              id="project_name"
              type="text"
              name="project_name"
              placeholder="What's your project concept called?"
              value={this.state.input.project_name}
              onChange={this.handleChanges}
              required
            />
          </>
          <>
            <label htmlFor="description">Project Description</label>
            <textarea
              id="description"
              type="text"
              name="description"
              placeholder="What will your project entail?"
              value={this.state.input.description}
              onChange={this.handleChanges}
              required
            />
          </>
          <>
            <button className="addlink" onClick={this.addLink}>
              Add Link
            </button>
            {Object.keys(this.state.input.links).map(link => (
              <div key={link}>
                <select
                  id={link}
                  value={this.state.input.links[link].link_type}
                  onChange={this.linkChanges}
                  name="link_type"
                >
                  <option defaultValue>Select Type</option>
                  <option>Figma</option>
                  <option>Sketch</option>
                  <option>Dropbox</option>
                  <option>Box</option>
                  <option>Google Drive</option>
                  <option>Office 365</option>
                </select>
                <input
                  required
                  id={link}
                  type="text"
                  value={this.state.input.links[link].link_href}
                  onChange={this.linkChanges}
                  name="link_href"
                  placeholder="Link URL"
                />
              </div>
            ))}
          </>

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { addProject }
)(AddProjectForm)
