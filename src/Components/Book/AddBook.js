import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    const [bookData, setBookData] = useState({
        title: '',
        description: '',
        year: ''
    });
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');

    const handleChange = (e) => {
        const {name, value} = e.target;
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
            await axios.post('http://5.22.217.225:8081/api/v1/book/', newBookData, {
                headers: {
                    Authorization: `${token}`
                }
            });
            setBookData({
                title: '',
                description: '',
                year: ''
            });
            navigate('/books');
        } catch (error) {
            console.error('Failed to add book:', error);
        }
    };

    return (
        <>
            <h1>Add new Book</h1>
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
                <button type="submit" className='submit-button'>Add Book</button>
            </form>
        </>
    );
}

export default AddBook;