import { createStore } from 'redux'


export default createStore(storeReducer)

function storeReducer(state, action) {
  state = state || {
    posts:[
      {id: 0, title: 'Post 1', body: 'This is post 1'},
      {id: 1, title: 'Post 2', body: 'This is post 2'},
      {id: 2, title: 'Post 3', body: 'This is post 3'}
    ]
  }

  return state
}
