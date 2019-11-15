import React, {Component} from 'react'
import {connect} from 'react-redux'
import Notifications from './Notifications.react'
import ProjectList from '../projects/ProjectList.react'

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            {this.props.project.fetchingProjects ?
              <h4 className="center blue-text text-darken-2">
                Loading Projects...
              </h4>:
              <ProjectList projects={this.props.project.projects} />
            }
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(({project})=> ({
  project,
}))(Dashboard)
