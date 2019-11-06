import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar.react'
import Dashboard from './components/dashboard/Dashboard.react'
import ProjectDetails from './components/projects/ProjectDetails.react'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
