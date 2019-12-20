import uuid from 'uuid/v1'

export default function MovieReducer(movies, action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      action.newMovie.uuid = uuid()
      return [...movies, action.newMovie]
    case 'REMOVE_MOVIE':
      return movies.filter((movie) => movie.uuid !== action.movie2Remove.uuid)
    default:
      break
  }
}
