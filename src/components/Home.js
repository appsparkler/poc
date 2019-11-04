import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Pokeball from '../pokeball.png'

class Home extends Component {
  render() {
    return getComponentJSX.call(this)
  }
}

export default connect(mapStateToProps)(Home)

// abstractions
function mapStateToProps(state, ownProps) {
  return {
    ...state,
    posts: state.posts
  }
}

function getComponentJSX() {
  const { posts } = this.props
  const noPostsJSX = (
    <div>No Posts Yet...</div>
  )
  const map_postsList = post => (
    <div className="post card" key={post.id}>
      <img src={Pokeball} alt="Pokeball" />
      <div className='card-content'>
        <Link to={{pathname:`/${post.id}`, state: post}}  >
          <h1 className='card-title red-text'>{post.title}</h1>
        </Link>
        <p>
          { post.body.substr(0, 80) }...
        </p>
      </div>
    </div>
  )
  const postsList = posts && posts.length ?
    posts.map(map_postsList) : noPostsJSX
  return (
    <div className="container home">
      <h4 className="center red-text">Home</h4>
      { postsList }
    </div>
  )
}
