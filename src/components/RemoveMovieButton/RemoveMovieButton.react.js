import React, {useContext} from 'react'
import {MovieContext} from '../../context/MovieContext.react'

export default function RemoveMovieButton({movie}) {
  const {removeMovie} = useContext(MovieContext)
  return (
    <button
      className="btn btn-danger"
      onClick={() => removeMovie(movie)}>
        Remove {movie.title}
    </button>
  )
}
