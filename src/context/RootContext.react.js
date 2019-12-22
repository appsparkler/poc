import React from 'react'
import AuthContextProvider from './AuthContext.react'
import BookContextProvider from './BookContext.react'
import MovieContextProvider from './MovieContext.react'
import ThemeContextProvider from './ThemeContext.react'

export default function({children}) {
  return (<AuthContextProvider>
    <BookContextProvider>
      <MovieContextProvider>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </MovieContextProvider>
    </BookContextProvider>
  </AuthContextProvider>)
}
