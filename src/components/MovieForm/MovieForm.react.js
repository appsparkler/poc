import React, {useContext, useState} from 'react'
import {MovieContext} from '../../context/MovieContext.react'

export default function MovieForm() {
  const [newMovie, setNewMovie] = useState({
    title: '',
    year: '',
  })
  const {addMovie} = useContext(MovieContext)
  const handleSubmit = (evt) => {
    evt.preventDefault()
    addMovie(newMovie)
  }
  return (<form
    className="mt-2 rounded-0"
    onSubmit={handleSubmit}>
    <div className="input-group mb-3 rounded-0">
      <input
        type="text"
        className={`form-control rounded-0 border`}
        placeholder="Movie Title..."
        value={newMovie.title}
        onChange={() => setNewMovie({
          ...newMovie,
          title: newMovie.title})}
        name="title"
      / >
      <input
        type="text"
        className={`form-control rounded-0 border`}
        placeholder="Release Year..."
        name="year"
        onChange={() => setNewMovie({...newMovie, year: newMovie.year})}
        value={newMovie.year}
      / >
      <div className="input-group-append">
        <button
          className={`btn btn-outline-secondary rounded-0`}
          type="submit"
        >
      Add Movie
        </button>
      </div>
    </div>
  </form>)
}
