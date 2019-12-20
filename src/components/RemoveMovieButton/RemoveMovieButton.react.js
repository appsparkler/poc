import React, {useContext} from 'react'
import {MovieContext} from '../../context/MovieContext.react'

export default function RemoveMovieButton({movie}) {
  const {dispatch: movieDispatcher} = useContext(MovieContext)
  return (
    <button
      className="btn btn-danger"
      onClick={
        () => movieDispatcher({type: 'REMOVE_MOVIE', movie2Remove: movie})
      }>
        Remove {movie.title}
    </button>
  )
}
