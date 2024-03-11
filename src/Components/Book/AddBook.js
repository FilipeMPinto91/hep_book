import React, { useState } from 'react';
import axios from 'axios';

function AddBook({token}) {
    const [bookData, setBookData] = useState({
        title: '',
        description: '',
        year: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBookData({
            ...bookData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://5.22.217.225:8081/api/v1/book/', bookData, {
                headers: {
                    Authorization: `${token}`
                }
            });
            setBookData({
                title: '',
                description: '',
                year: ''
            });
        } catch (error) {
            console.error('Failed to add book:', error);
        }
    };

    return (
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
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBook;