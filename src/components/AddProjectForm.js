import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/addform.css'

class AddProjectForm extends Component {
  state = {
    input: {
      project_name: '',
      description: '',
      links: '',
      files: '',
      images: ''
    }
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
            <label for="project_name">Project Name</label>
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
            <label for="description">Description</label>
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
            <label for="link">links</label>
            <input
              id="link"
              type="text"
              name="link"
              value={this.state.input.link}
              onChange={this.handleChanges}
            />
          </>
          <>
            <label for="file">File Upload</label>
            <input
              id="file"
              type="file"
              name="file"
              multiple
              value={this.state.input.file}
              onChange={this.handleChanges}
            />
          </>
          <>
            <label for="image">Images</label>
            <input
              id="image"
              type="file"
              name="image"
              multiple
              value={this.state.input.image}
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
