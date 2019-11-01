import React from 'react'
import { Link } from 'react-router-dom'

export default function(props) {
  const post  = props.location.state && props.location.state.id ?
    props.location.state: undefined
  if (post) {
    return(
      <div className="container">
        <div className="post card">
          <div className='card-content'>
            <h1 className='card-title red-text'>{post.title}</h1>
            <p>
              { post.body }
            </p>
          </div>
        </div>
      </div>
    )
  } else {
    return <h1 className="container">No Posts available, Please go to <Link to="/">Home Page</Link></h1>
  }
}
