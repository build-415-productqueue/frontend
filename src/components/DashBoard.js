import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { URL } from '../actions'
import axios from 'axios'
import ProjectCard from './ProjectCard'

class DashBoard extends Component {
  state = {
    projects: [1, 2, 3],
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
      <div>
        <h1>{this.state.message ? this.state.message : 'hello'}</h1>
        <div>
          {this.state.projects.map(cards => (
            <ProjectCard />
          ))}
        </div>
      </div>
    )
  }
}

export default DashBoard
