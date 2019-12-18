import React, {createContext, useState} from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext()

// function addBook(books, setBooks, newBook) {
//   setBooks({
//     ...books,
//     newBook,
//   })
// }

export default function BookContextProvider({children}) {
  const INITIAL_BOOKS = [
    {
      title: 'The Final Empire',
      id: uuid(),
    }, {
      title: 'Name of the Wind',
      id: uuid(),
    }, {
      title: 'The Hero Of Ages',
      id: uuid(),
    }, {
      title: 'The Way Of Kings',
      id: uuid(),
    },
  ]
  const [books] = useState(INITIAL_BOOKS)
  return (
    <BookContext.Provider value={{
      books,
    }}>
      {children}
    </BookContext.Provider>)
}
