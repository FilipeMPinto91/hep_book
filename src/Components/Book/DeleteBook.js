import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function DeleteBook() {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    const {bookId} = useParams();

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this book?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://5.22.217.225:8081/api/v1/book/${bookId}`, {
                    headers: {
                        Authorization: `${token}`
                    }
                });
                console.log('Book deleted successfully');
                navigate('/books');
            } catch (error) {
                console.error('Failed to delete book:', error);
            }
        }
    };

    return (
        <button onClick={handleDelete} className='delete-book-button'>Delete Book</button>
    );
}

export default DeleteBook;