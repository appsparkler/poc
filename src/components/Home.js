import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        // alert(JSON.stringify())
        const randomNumber = Math.floor(Math.random() * 80)
        // alert(res.data.length);
        this.setState({
          posts: res.data.splice(randomNumber, 10)
        })
      })
  }
  render() {
    const { posts } = this.state
    const noPostsJSX = (
      <div>No Posts Yet...</div>
    )
    const map_postsList = post => (
      <div className="post card" key={post.id}>
        <div className='card-content'>
          <Link to={'/post/' + post.id} post={post}>
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
      <div className="container">
        <h4 className="center red-text">Home</h4>
        { postsList }
      </div>
    )
  }
}

export default Home
