import React from 'react'

const Project = props => {
  return (
    <div>
      <h1>Some product image if given</h1>
      <div>
        <h2>Project title</h2>
        <h4>Submitted By: </h4>
        <h4>Company: </h4>
        <h4>Description: </h4> <p>Project Description</p>
        <h4>Status: </h4>
        <h4>Date Submitted: </h4>
        <h4>Last Updated: </h4>
      </div>
      <div>
        <h2>Project Links</h2>
        <h4>Figma: </h4>
        <h4>GitHub Repo: </h4>
        <h4>Heroku App: </h4>
      </div>
      <div>
        <h2>Comments</h2>

        <button>Add Comment</button>
      </div>
    </div>
  )
}

export default Project
