import React, {createContext, useReducer} from 'react'
import MovieReducer from '../reducers/MovieReducer.react'

export const MovieContext = createContext()

export default function MovieContextProvider({children}) {
  const [movies, dispatch] = useReducer(MovieReducer, [])
  const context = {
    movies,
    dispatch,
  }
  return (<MovieContext.Provider value={context}>
    {children}
  </MovieContext.Provider>)
}
