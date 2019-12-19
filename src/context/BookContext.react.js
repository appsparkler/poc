import React, {createContext, useState} from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext()

function addBookBinded(books, setBooks, newBook) {
  setBooks([
    ...books,
    newBook,
  ])
}

function removeBookBinded(books, setBooks, bookToRemove) {
  const newBookList = books.filter((book) => book.id !== bookToRemove.id)
  setBooks(newBookList)
}

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
  const [books, setBooks] = useState(INITIAL_BOOKS)
  const addBook = addBookBinded.bind(null, books, setBooks)
  const removeBook = removeBookBinded.bind(null, books, setBooks)
  return (
    <BookContext.Provider value={{
      books,
      addBook,
      removeBook,
    }}>
      {children}
    </BookContext.Provider>)
}
