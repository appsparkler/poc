import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
  deletePost() {
    const { post_id } = this.props.match.params
    this.props.deletePost(post_id)
    this.props.history.push('/')
  }
  render() {
    return getComponentJSX.call(this)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Post)

function matchDispatchToProps(dispatch) {
  return {
    deletePost: (post_id) => dispatch({type: 'DELETE_POST', post_id: post_id })
  }
}

function mapStateToProps(state, ownProps) {
  const { post_id } = ownProps.match.params
  return {
    post: state.posts.find(post => post.id === post_id )
  }
}

function getComponentJSX() {
  const { post } = this.props
  const postJSX = post ?
    <div className="container">
      <h4>{ post.title }</h4>
      <p>
        { post.body }
      </p>
      <button className="btn red" onClick={this.deletePost.bind(this)}>DELETE POST</button>
    </div> : <h6>Post deleted...</h6>
  return postJSX
}
