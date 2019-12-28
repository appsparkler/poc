import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProject} from '../../store/actions/project'

const ProjectDetails = (props) => {
  const dispatch = useDispatch()
  const {fetchingProject, fetchedProject} =
  useSelector((state) => state.project)
  useEffect(() => {
    dispatch(fetchProject(props.match.params.id))
  }, [dispatch, props.match.params.id])
  return (
    <>
      <div className="project-details section container">
        <div className="card z-depth-0">
          <div className="card-content">
            {
              fetchingProject ? (
                <div className="progress">
                  <div className="indeterminate"></div>
                </div>): ''
            }
            <h3 className="card-title">
              {fetchedProject ? fetchedProject.title : ''}
            </h3>
            <p>
              {fetchedProject ? fetchedProject.content: ''}
            </p>
          </div>
          {/* Author Details*/}
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted By The Net Ninja</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails


/**/
