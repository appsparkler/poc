import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
  render() {
    return getComponentJSX.call(this)
  }
}

export default connect(mapStateToProps)(Post)

function mapStateToProps(state, ownProps) {
  const { post_id } = ownProps.match.params
  return {
    post: state.posts.find(post => post.id === post_id )
  }
}

function getComponentJSX() {
  const { post } = this.props
  return(
    <div className="container">
      <h4>{ post.title }</h4>
      <p>
        { post.body }
      </p>
    </div>
  )
}
