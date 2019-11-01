import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

// export default function(props) {
//   let post  = props.location.state && props.location.state.id ?
//     props.location.state: undefined
//   if(!post) {
//     console.log('fetching post...')
//     post = axios.get('https://jsonplaceholder.typicode.com/posts/1')
//       .then(remotePost => {
//         post = remotePost
//       })
//       console.log(post)
//   }
//   if (post) {
//     return(
//       <div className="container">
//         <div className="post card">
//           <div className='card-content'>
//             <h1 className='card-title red-text'>{post.title}</h1>
//             <p>
//               { post.body }
//             </p>
//           </div>
//         </div>
//       </div>
//     )
//   } else {
//     return <h1 className="container">No Posts available, Please go to <Link to="/">Home Page</Link></h1>
//   }
// }
