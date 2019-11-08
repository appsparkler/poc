import React from 'react'
import ProjectSummary from './ProjectSummary.react'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.length && projects.map((project) => (
        <ProjectSummary project={project} key={project.id} />
      ))}
    </div>
  )
}

export default ProjectList
