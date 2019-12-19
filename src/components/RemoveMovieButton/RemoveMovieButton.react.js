import React, {useContext} from 'react'
import MovieContext from '../../context/MovieContext.react'

export default function RemoveMovieButton({movie}) {
  const {removeMovie} = useContext(MovieContext)
  return (<button onClick={() => removeMovie(movie)}>
      Remove Movie
  </button>)
}
