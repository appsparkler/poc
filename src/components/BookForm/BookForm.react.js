import React, {useContext} from 'react'
import {BookContext} from '../../context/BookContext.react'
import {ThemeContext} from '../../context/ThemeContext.react'
import uuid from 'uuid/v1'

export default () =>{
  const {addBook} = useContext(BookContext)
  const {theme} = useContext(ThemeContext)
  const handleSubmit=(evt) => {
    evt.preventDefault()
    const form = evt.target
    const fd = new FormData(form)
    const title = fd.get('title').trim()
    if (title) {
      addBook({
        title: fd.get('title'),
        id: uuid(),
      })
    }
    form.reset()
  }
  return (
    <form
      className="mt-2 rounded-0"
      onSubmit={handleSubmit}>
      <div className="input-group mb-3 rounded-0">
        <input
          type="text"
          className={`form-control rounded-0 border border-${theme}`}
          placeholder="Book Title..."
          name="title"
        / >
        <div className="input-group-append">
          <button
            className={`btn btn-outline-secondary btn-${theme} rounded-0`}
            type="submit"
          >
        Add Book
          </button>
        </div>
      </div>
    </form>)
}
