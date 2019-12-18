import React, {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext.react'
import {BookContext} from '../../context/BookContext.react'

export default function BookList() {
  const {books, removeBook} = useContext(BookContext)
  const {theme} = useContext(ThemeContext)
  return (
    <div className="p-2 mt-2 border border-primary">
      <h4 className="primary">Book List Component</h4>
      <ul className={`list-group rounded-0 mt-2 border border-primary`}>
        {books.map((book) => (
          <li
            key={book.id}
            className={`list-group-item d-flex justify-content-between rounded-0
                        list-group-item-${theme}`
            }>
            <span>{book.title}</span>
            <button className="btn btn-danger"
              onClick={removeBook.bind(null, book)}>
              Remove Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
