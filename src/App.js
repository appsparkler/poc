import React from 'react'
import Navbar from './components/Navbar/Navbar.react'
import BookList from './components/BookList/BookList.react'
import ThemeContextProvider from './context/ThemeContext.react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <ThemeContextProvider>
          <Navbar />
          <BookList />
        </ThemeContextProvider>
      </div>
    )
  }
}

export default App
