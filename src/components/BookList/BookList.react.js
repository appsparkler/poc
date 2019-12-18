import React, {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext.react'
import {BookContext} from '../../context/BookContext.react'

export default function BookList() {
  const {books} = useContext(BookContext)
  const {theme} = useContext(ThemeContext)
  return (
    <div className="p-2 mt-2 border border-primary">
      <h4 className="primary">Book List Component</h4>
      <ul className={`list-group rounded-0 mt-2 border border-primary`}>
        {books.map((book) => (
          <li className={`list-group-item rounded-0
                                list-group-item-${theme}`
          }>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}
