import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {
  state = {
    postId: undefined,
    post: {}
  }

  componentDidMount() {
    setPostDataOnState.call(this)
  }

  render() {
    return getComponentJSX.call(this)
  }
}

function getComponentJSX() {
  const { post } = this.state
  return(
    <div className="container">
      <h4>{ post.title }</h4>
      <p>
        { post.body }
      </p>
    </div>
  )
}

async function setPostDataOnState() {
  const id = this.props.match.params.post_id
  const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  this.setState({
    post: post.data
  })
}
