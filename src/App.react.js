import React from 'react'
import Navbar from './components/Navbar/Navbar.react'
import BookList from './components/BookList/BookList.react'
import ThemeContextProvider from './context/ThemeContext.react'
import AuthContextProvider from './context/AuthContext.react'
import BookContextProvider from './context/BookContext.react'
import SongList from './components/SongList/SongList.react'
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch.react'
import AuthSwitch from './components/AuthSwitch/AuthSwitch.react'
import AuthAndThemeSwitch from
  './components/AuthAndThemeSwitch/AuthAndThemeSwitch.react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <ThemeContextProvider>
          <AuthContextProvider>
            <AuthAndThemeSwitch />
            <div className="mt-2">
              <AuthSwitch />
            </div>
            <ThemeSwitch />
            <Navbar />
            <BookContextProvider>
              <BookList />
            </BookContextProvider>
            <SongList />
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
    )
  }
}

export default App
