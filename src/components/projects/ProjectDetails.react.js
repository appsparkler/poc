import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from './useSelector'
import {fetchProject} from '../../store/actions/project'

export const fetchProjectEffect = ({dispatch, props}) => {
  dispatch(fetchProject(props.match.params.id))
}

export const projectSelector = (state) => state.project

const ProjectDetails = (props) => {
  const dispatch = useDispatch()
  // What are we doing here?
  // Here, we retrieving two variable from the store and mapping
  // it to two variables
  const {fetchingProject, fetchedProject} =
  useSelector(projectSelector)
  // What are we trying to do here?
  // basically, when component mounts, we want to dispatch an action
  // This action will fetch a project (given a project id) and
  // will store it on the redux store.
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
