import React, {useContext} from 'react'
import RemoveMovieButton from '../RemoveMovieButton/RemoveMovieButton.react'
import {ThemeContext} from '../../context/ThemeContext.react'
import {MovieContext} from '../../context/MovieContext.react'

export default function MovieList() {
  const {theme} = useContext(ThemeContext)
  const {movies} = useContext(MovieContext)
  return (
    <div>
      {
        movies.length ? (
          <ul className={`list-group rounded-0`}>
            {movies.map((movie) => (
              <li
                key={movie.uuid}
                className={`list-group-item d-flex
                    justify-content-between rounded-0
                        list-group-item-${theme}`
                }>
                <span>{movie.title} from the year {movie.year}</span>
                <RemoveMovieButton movie={movie} />
              </li>
            ))}
          </ul>) :
          <div className="alert alert-primary">No Movies in your list</div>
      }
    </div>)
}
