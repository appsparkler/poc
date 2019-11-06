import React from 'react'
import {Link} from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul class="right">
      <Link to="/">Sign Up</Link>
      <Link to="/">Login</Link>
    </ul>
  )
}

export default SignedOutLinks
