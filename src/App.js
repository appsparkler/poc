
// import all required libraries
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
//
import Navbar from './components/Navbar'
//
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About} />
        <Route path="/:post_id" component={Post} />
      </div>
    </BrowserRouter>
  )
}

export default App
