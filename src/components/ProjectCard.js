import React from 'react'
import { URL } from '../actions'
import { Link } from 'react-router-dom'

const ProjectCard = props => {
  return (
    //Change the :id (${id}), change localhost to netifly
    <Link to={`/project-details/:id`}>
      <div>
        <h1>Project Title</h1>
        <h3>Users name, Company Name</h3>
        <p>Description</p>
        <h6>Time Stamp, Project status</h6>
      </div>
    </Link>
  )
}

export default ProjectCard
