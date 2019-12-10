import React from 'react';
import Navbar from './components/Navbar/Navbar.react';
import BookList from './components/BookList/BookList.react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';

function App() {
  return (
    <div className="App container">
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
