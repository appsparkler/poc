import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProject} from '../../store/actions/project'

export const fetchProjectEffect = ({dispatch, props}) => {
  dispatch(fetchProject(props.match.params.id))
}

export const projectSelector = (state) => state.project

const ProjectDetails = (props) => {
  const dispatch = useDispatch()
  const {fetchingProject, fetchedProject} =
  useSelector(projectSelector)
  useEffect(
      fetchProjectEffect.bind(null, {dispatch, props}),
      [dispatch, props.match.params.id]
  )
  return (
    <>
      <div className="project-details section container">
        <div className="card z-depth-1">
          {
            fetchingProject ? (
              <div className="card-content">
                <div className="progress">
                  <div className="indeterminate"></div>
                </div>
              </div>
              ) : (
              <div>
                <div className="card-content">
                  <h3 className="card-title">
                    {
                      !fetchingProject && fetchedProject ?
                      fetchedProject.title : ''
                    }
                  </h3>
                  <p className="card-body">
                    {
                      !fetchingProject && fetchedProject ?
                      fetchedProject.content: ''
                    }
                  </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                  <div>Posted By The Net Ninja</div>
                  <div>2nd September, 2am</div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default ProjectDetails


/**/
