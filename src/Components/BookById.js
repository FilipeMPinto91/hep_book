import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function BookById() {
    const {bookId} = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetchBook(bookId)
    }, [bookId]);

    const fetchBook = (bookId) => {
        fetch(`http://5.22.217.225:8081/api/v1/book/${bookId}`)
        .then(res => res.json())
        .then(bookData => setBook(bookData.data))
        .catch(error => console.error('Error fetching post:', error));
    };

    return (
        <div>
        <h1>Book</h1> 
        { book && (
            <>
                <h2>{book.title}</h2>
                <p>{book.year}</p>
                <p>{book.description}</p>
                <img src={book.book_cover} alt='Book Cover'/><br/><br/>
                <Link to='/Books'>Back</Link>
            </>
        )}
        </div>
    );
}

export default BookById;
