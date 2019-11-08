import React, {Component} from 'react'
import {connect} from 'react-redux'
import Notifications from './Notifications.react'
import ProjectList from '../projects/ProjectList.react'

export class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={this.props.projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    projects: state.project.projects,
  }
}

export default connect(mapStateToProps)(Dashboard)
