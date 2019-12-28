import React from 'react'
import ProjectSummary from './ProjectSummary.react'
import {Link} from 'react-router-dom'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map((project, i) => (
        <Link to={`/project/${project.id}`}
          key={`project-summary-${project.id}`}
        >
          <ProjectSummary project={project} />
        </Link>
      ))}
    </div>
  )
}

export default ProjectList
