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
import Home from './Components/Home/Home';
import UpdateBook from './Components/Book/UpdateBook';
import UpdateUser from './Components/User/UpdateUser';
import DeleteBook from './Components/Book/DeleteBook';

function App() { 
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books' element={<Book/>} />
        <Route path='/books/:bookId' element={<BookById/>}/>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/addbook' element={<AddBook/>} />
        <Route path='/updatebook/:bookId' element={<UpdateBook/>} />
        <Route path='/updateuser' element={<UpdateUser/>} />
        <Route path='/deletebook' element={<DeleteBook/>} />
      </Routes>
    </Router>
  );
}

export default App;
