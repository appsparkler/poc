import React, {createContext, useState} from 'react'
import uuid from 'uuid/v1'

export const MovieContext = createContext()

function addMovieBinded(movies, setMovies, newMovie) {
  newMovie = Object.assign(newMovie, {
    uuid: uuid(),
  })
  setMovies([
    ...movies,
    newMovie,
  ])
}

function removeMovieBinded(movies, setMovies, movie2Remove) {
  setMovies(movies.filter((movie) => movie.uuid !== movie2Remove.uuid ))
}

export default function MovieContextProvider({children}) {
  const [movies, setMovies] = useState([])
  const addMovie = addMovieBinded.bind(null, movies, setMovies)
  const removeMovie = removeMovieBinded.bind(null, movies, setMovies)
  const context = {
    movies,
    addMovie,
    removeMovie,
  }
  return (<MovieContext.Provider value={context}>
    {children}
  </MovieContext.Provider>)
}
