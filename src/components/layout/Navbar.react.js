import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar-wrapper gray darken-3">
      <div className="container">
        <Router>
          <Link to="/" className="brand-logo">
            MarioPlan
          </Link>
        </Router>
      </div>
    </div>
  )
}

export default Navbar
