import { createStore } from 'redux'

const initState = {
  posts:[
    {id: 0, title: 'Post 1', body: 'This is post 1'},
    {id: 0, title: 'Post 2', body: 'This is post 2'},
    {id: 0, title: 'Post 3', body: 'This is post 3'}
  ]
}

export default createStore(storeReducer)

function storeReducer(state = initState, action) {}
