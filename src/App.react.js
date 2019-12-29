import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar.react'
import Dashboard from './components/dashboard/Dashboard.react'
import ProjectDetails from './components/projects/ProjectDetails.react'
import SignIn from './components/auth/SignIn.react'
import SignUp from './components/auth/SignUp.react'
import CreateProject from './components/projects/CreateProject.react'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
