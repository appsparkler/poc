import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProjectSummary from './ProjectSummary.react'
import {fetchAndStoreProjects} from '../../store/actions/project'
import {Link} from 'react-router-dom'

const ProjectList = () => {
  const {projects} = useSelector((state) => state.project)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAndStoreProjects())
  }, [dispatch])
  return (
    <div className="project-list section">
      {
        projects && projects.map((project, i) => (
          <Link
            to={`/project/${project.id}`}
            key={`project-summary-${project.id}`}
          >
            <ProjectSummary project={project} />
          </Link>
        ))
      }
    </div>
  )
}

export default ProjectList
