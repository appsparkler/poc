import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks.react'
import SignedOutLinks from './SignedOutLinks.react'

const Navbar = () => {
  return (
    <div className="navbar-wrapper gray darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
            MarioPlan
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </div>
  )
}

export default Navbar
