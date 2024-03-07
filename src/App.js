import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Book from './Components/Book';
import BookById from './Components/BookById';

function App() { 
  return (
    <Router>
      <Routes>
        <Route path='/Books' element={<Book/>} />
        <Route path='/Books/:bookId' element={<BookById/>}/>
      </Routes>
    </Router>
  );
}

export default App;
