import React from 'react'
import {Link} from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><Link to="/">Sign Up</Link></li>
      <li><Link to="/">Login</Link></li>
    </ul>
  )
}

export default SignedOutLinks
