import React, {createContext, useReducer, useEffect} from 'react'
import MovieReducer from '../reducers/MovieReducer.react'

export const MovieContext = createContext()

export default function MovieContextProvider({children}) {
  const localData = JSON.parse(localStorage.getItem('movies')) || []
  const [movies, dispatch] = useReducer(MovieReducer, localData)
  const context = {
    movies,
    dispatch,
  }
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies))
  }, [movies])
  return (<MovieContext.Provider value={context}>
    {children}
  </MovieContext.Provider>)
}
