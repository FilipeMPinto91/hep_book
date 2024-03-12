import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Book() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        fetch('http://5.22.217.225:8081/api/v1/book/')
            .then(res => res.json())
            .then(bookData => {
                if(Array.isArray(bookData.data)) {
                    setBooks(bookData.data);
                } else {
                    console.error('Error fetching books: Data is not an array')
                }
            })
    };
    
    return (
        <div>
            <h1>Book Collection</h1>
            <ul className='book-collection'>
                {books.map(book => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        {/* <p>{book.year}</p>
                        <p>{book.description}</p> */}
                        <img src={book.book_cover} alt='Book Cover'/>
                        <Link to={`/Books/${book.id}`} className='select-link'>Book Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Book;