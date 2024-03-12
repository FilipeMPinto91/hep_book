import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function BookById() {
    const {bookId} = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBook(bookId)
    }, [bookId]);

    const fetchBook = (bookId) => {
        fetch(`http://5.22.217.225:8081/api/v1/book/${bookId}`)
        .then(res => res.json())
        .then(bookData => setBook(bookData.data))
        .catch(error => console.error('Error fetching post:', error));
    };

    const handleUpdateBook = () => {
        navigate(`/updatebook/${bookId}`);
    };

    return (
        <>
            <h1>Book</h1> 
            <div className='individual-book'>
            { book && (
                <>
                    <p><strong>Book Title:</strong> {book.title}</p>
                    <p><strong>Book Year:</strong> {book.year}</p>
                    <img src={book.book_cover} alt='Book Cover' className='book-image'/>
                    <p><strong>Book Description:</strong> {book.description}</p>
                    <br/>
                    <button onClick={handleUpdateBook}>Update Book</button>
                    <Link to='/Books' className='select-link'>Back</Link>
                </>
            )}
            </div>
        </>
    );
}

export default BookById;
