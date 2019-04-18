import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/projects.css'
import moment from 'moment'

const ProjectCard = props => {
  return (
    <Link
      to={{
        pathname: `/project-details/${props.card.id}`,
        state: { card: props.card }
      }}
    >
      <div className="projectcard">
        <span className="timestamp">
          {' '}
          {moment(props.card.created_at, 'YYYY-MM-DDTkk:mm:ss.SSSZ').format(
            'MMMM Do, YYYY'
          )}
        </span>
        <h1>{props.card.name}</h1>
        <h6>
          {props.card.first_name} {props.card.last_name}, {props.card.company}
        </h6>
        <p>{props.card.description}</p>
        <h6 className="status">
          Status:{' '}
          <span className={props.card.status}> {props.card.status}</span>
        </h6>
      </div>
    </Link>
  )
}

export default ProjectCard
