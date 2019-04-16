import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { URL } from '../actions'
import axios from 'axios'
import ProjectCard from './ProjectCard'
import '../styles/projects.css'

class DashBoard extends Component {
  state = {
    projects: [1, 2, 3, 4],
    message: ''
  }

  componentDidMount() {
    axios
      .get(`${URL}`)
      .then(res => {
        this.setState({
          message: res.data.status
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Project Dashboard</h1>
        <div className="projectlist">
          {this.state.projects.map((project, i) => (
            <ProjectCard key={i} card={project} />
          ))}
        </div>
      </div>
    )
  }
}

export default DashBoard
