import React from 'react'
import ProjectSummary from './ProjectSummary.react'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map((project, i) => (
        <ProjectSummary project={project} key={`project-summary-${i}`} />
      ))}
    </div>
  )
}

export default ProjectList
