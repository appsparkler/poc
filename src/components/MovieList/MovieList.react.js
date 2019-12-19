import React, {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext/ThemeContext.react'
import {MovieContext} from '../../context/MovieContext/MovieContext.react'

export default function MovieList() {
  const {theme} = useContext(ThemeContext)
  const {movies} = useContext(MovieContext)

  return (
    <div>
      <ul className={`list-group rounded-0 mt-2 border border-primary`}>
        {movies.map((movie) => (
          <li
            key={movie.id}
            className={`list-group-item d-flex justify-content-between rounded-0
                      list-group-item-${theme}`
            }>
            <span>{movie.title}</span>
          </li>
        ))}
      </ul>
    </div>)
}
