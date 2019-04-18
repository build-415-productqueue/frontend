import React, { Component } from 'react'
import { URL } from '../actions'
import axios from 'axios'
import ProjectCard from './ProjectCard'
import '../styles/projects.css'

class DashBoard extends Component {
  state = {
    projects: [],
    error: ''
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('data'))
    const token = localStorage.getItem('token')
    if (data.role === 'admin') {
      //GET to All projects
      axios
        .get(`${URL}/api/projects`, {
          headers: {
            Authorization: token
          }
        })
        .then(res => {
          this.setState({
            projects: res.data
          })
          console.log(res.data)
        })
        .catch(err => {
          this.setState({
            error: err
          })
        })
    } else {
      axios
        .get(`${URL}/api/projects/${data.id}`, {
          headers: {
            Authorization: token
          }
        })
        .then(res => {
          this.setState({
            projects: res.data
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
        <div className="projectlist">
          {this.state.projects.map((project, i) => (
            <ProjectCard key={i} card={project} user={data} />
          ))}
        </div>
      </div>
    )
  }
}

export default DashBoard
