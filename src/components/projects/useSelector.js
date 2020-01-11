import React from 'react'
import store from '../../store'

export const useSelector = (fn) => {
  const [state, setState] = React.useState(store.getState())
  store.subscribe(() => {
    setState(store.getState())
  })
  return fn(state)
}
