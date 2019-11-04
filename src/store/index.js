import { createStore } from 'redux'


export default createStore(storeReducer)

function storeReducer(state, action) {
  state = state || {
    posts:[
      {id: "0", title: 'Post 1', body: 'This is post 1'},
      {id: "1", title: 'Post 2', body: 'This is post 2'},
      {id: "2", title: 'Post 3', body: 'This is post 3'}
    ]
  }

  // DELETE _POST
  if (action.type === 'DELETE_POST') return deletePost.call(null, state, action.post_id)


  else return {
    ...state
  }
}

function deletePost(state, post_id) {
  const newState = {
    ...state,
    posts: state.posts.filter(post => post_id !== post.id)
  }
  return newState
}
