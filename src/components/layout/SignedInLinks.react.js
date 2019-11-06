import React from 'react'
import {Link} from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className="right">
      <Link to="/">Create Project</Link>
      <Link to="/">Logout</Link>
      <Link to="/" className="btn btn-floating btn-pink">NN</Link>
    </ul>
  )
}

export default SignedInLinks
