import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Book from './Components/Book/Book';
import BookById from './Components/Book/BookById';
import LoginPage from './Components/Authentication/LoginPage';
import RegisterPage from './Components/Authentication/RegisterPage';
import NavigationBar from './Components/Navigation/NavigationBar';
import User from './Components/User/User';
import AddBook from './Components/Book/AddBook';

function App() { 
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/books' element={<Book/>} />
        <Route path='/books/:bookId' element={<BookById/>}/>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/addbook' element={<AddBook/>} />
      </Routes>
    </Router>
  );
}

export default App;
