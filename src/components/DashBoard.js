import React, { Component } from 'react'
import { URL } from '../actions'
import axios from 'axios'
import ProjectCard from './ProjectCard'
import Loader from 'react-loader-spinner'
import '../styles/projects.css'

class DashBoard extends Component {
  state = {
    projects: [],
    error: '',
    fetching: false,
    sortTerm: '',
    searchTerm: ''
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('data'))
    const token = localStorage.getItem('token')
    if (data.role === 'admin') {
      //GET to All projects
      axios
        .get(
          `${URL}/api/projects`,
          {
            headers: {
              Authorization: token
            }
          },
          this.setState({
            fetching: true
          })
        )
        .then(res => {
          this.setState({
            projects: res.data,
            fetching: false
          })
        })
        .catch(err => {
          this.setState({
            error: err
          })
        })
    } else {
      axios
        .get(
          `${URL}/api/projects/${data.id}`,
          {
            headers: {
              Authorization: token
            }
          },
          this.setState({
            fetching: true
          })
        )
        .then(res => {
          this.setState({
            projects: res.data,
            fetching: false
          })
        })
        .catch(err => {
          this.setState({
            error: err
          })
        })
    }
  }

  updateSearch = e => {
    this.setState({ [e.target.name]: e.target.value.substr(0, 20) })
  }

  render() {
    const data = JSON.parse(localStorage.getItem('data'))
    let searchedProjects = this.state.projects.filter(project => {
      if (
        project.name
          .toLowerCase()
          .indexOf(this.state.searchTerm.toLowerCase()) > -1
      ) {
        return project
      } else if (
        project.status
          .toLowerCase()
          .indexOf(this.state.searchTerm.toLowerCase()) > -1
      ) {
        return project
      } else {
        return null
      }
    })
    return (
      <div className="container">
        <h1>Project Dashboard</h1>
        <input
          id="search"
          type="text"
          name="searchTerm"
          placeholder="Search projects..."
          onChange={this.updateSearch}
          value={this.state.searchTerm}
        />

        {!this.state.fetching ? (
          <div className="projectlist">
            {searchedProjects.map((project, i) => (
              <ProjectCard key={i} card={project} user={data} />
            ))}
          </div>
        ) : (
          <Loader type="Ball-Triangle" color="#a00100" height="90" width="60" />
        )}
      </div>
    )
  }
}

export default DashBoard
