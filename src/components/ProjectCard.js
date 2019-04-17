import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/projects.css'

const ProjectCard = props => {
  return (
    //Change the :id (${id}), change localhost to netifly
    <Link to={`/project-details/:id`}>
      <div className="projectcard">
        <span className="status">Status</span>
        <h1>Project Title</h1>
        <p>Description</p>
        <h6 className="timestamp">Posted at: Time Stamp</h6>
        <h6>Posted by: User's name | Company Name</h6>
      </div>
    </Link>
  )
}

export default ProjectCard
