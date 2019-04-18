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
    fetching: false
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

  render() {
    const data = JSON.parse(localStorage.getItem('data'))
    return (
      <div className="container">
        <h1>Project Dashboard</h1>
        {!this.state.fetching ? (
          <div className="projectlist">
            {this.state.projects.map((project, i) => (
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
