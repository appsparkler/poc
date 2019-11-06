import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/layout/Navbar.react'
import Dashboard from './components/dashboard/Dashboard.react'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    </BrowserRouter>
  )
}

export default App
