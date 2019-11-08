import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <div className="project-summary card z-depth-0">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted By Net Ninja</p>
        <p className="grey-text">
          3rd September, 2am
        </p>
      </div>
    </div>
  )
}

export default ProjectSummary
