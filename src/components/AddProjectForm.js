import React, { Component } from 'react'
import '../styles/addform.css'

class AddProjectForm extends Component {
  state = {
    input: {
      project_name: '',
      description: '',
      links: {
        link1: {
          link_type: '',
          link_href: ''
        }
      },
      files: ''
    }
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
        <form>
          <div className="addheader">
            <h2>Upload a project!</h2>
          </div>
          <>
            <label htmlFor="project_name">Project Name</label>
            <input
              id="project_name"
              type="text"
              name="project_name"
              placeholder="Project Name"
              value={this.state.input.project_name}
              onChange={this.handleChanges}
              required
            />
          </>
          <>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              type="text"
              name="description"
              placeholder="Project Description"
              value={this.state.input.description}
              onChange={this.handleChanges}
              required
            />
          </>
          <>
            <label htmlFor="link">link to wireframe</label>
            <input
              id="link"
              type="text"
              name="link"
              value={this.state.input.link}
              onChange={this.handleChanges}
            />
          </>
          <>
            <label htmlFor="file">Link to Technical specification "Spec"</label>
            <input
              id="file"
              type="text"
              name="file"
              multiple
              value={this.state.input.file}
              onChange={this.handleChanges}
            />
          </>

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddProjectForm
