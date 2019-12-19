import React, {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext.react'
import {MovieContext} from '../../context/MovieContext.react'

export default function MovieList() {
  const {theme} = useContext(ThemeContext)
  const {movies} = useContext(MovieContext)

  return (
    <div>
      <ul className={`list-group rounded-0 mt-2 border border-primary`}>
        {movies.map((movie) => (
          <li
            key={movie.uuid}
            className={`list-group-item d-flex justify-content-between rounded-0
                      list-group-item-${theme}`
            }>
            <span>{movie.title} from the year {movie.year}</span>
          </li>
        ))}
      </ul>
    </div>)
}
