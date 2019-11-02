import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Pokeball from '../pokeball.png'

class Home extends Component {
  state = {
    posts: []
  }
  async componentDidMount() {
    await setPostDataOnState.call(this)
  }
  render() {
    return getComponentJSX.call(this)
  }
}

export default Home

async function setPostDataOnState() {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const randomNumber = Math.floor(Math.random() * 80)
  this.setState({
    posts: posts.data.splice(randomNumber, 10)
  })
}

function getComponentJSX() {
  const { posts } = this.state
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
