import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


function UpdateBook() {
    const [bookData, setBookData] = useState({
        title: '',
        description: '',
        year: '',
        book_cover: ''
    });
    const token = sessionStorage.getItem('token');
    const navigate = useNavigate();
    const {bookId} = useParams();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const yearValue = parseInt(bookData.year);

        const newBookData = {
            ...bookData,
            year: yearValue
        };

        try {
            await axios.put(`http://5.22.217.225:8081/api/v1/book/${bookId}`, newBookData, {
                headers: {
                    Authorization: `${token}`
                }
            });
            console.log('Book updated successfully');
            navigate(`/books/${bookId}`);
        } catch (error) {
            console.error('Failed to update book:', error);
        }
    };

    return (
        <>
            <h1>Update Book</h1>
        
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={bookData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={bookData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <input
                    type="number"
                    name="year"
                    value={bookData.year}
                    onChange={handleChange}
                    placeholder="Year"
                    required
                />
                <input
                    type="text"
                    name="book_cover"
                    value={bookData.book_cover}
                    onChange={handleChange}
                    placeholder="Book Cover URL"
                    required
                />
                <button type="submit" className='submit-button'>Update Book</button>
            </form>
        </>
    );
}

export default UpdateBook;