import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Details.css';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    
    const goToSignup = () => navigate('/Sign');
    const goToHome = () => navigate('/Home');
    const goToLogin = () => navigate('/');

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cart');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/cart/${id}`);
            setBookings(bookings.filter(booking => booking.id !== id)); // Update state to remove deleted booking
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    return (
        <div>
            <ul className='header'>
                
                <li onClick={goToHome}>Home</li>
                <li onClick={goToLogin}>Login</li>
                <li onClick={goToSignup}>Register</li>
                <li>About Us</li>
            </ul>
            <div className="details-container">
                <h1>Booking Details</h1>
                {bookings.length > 0 ? (
                    <ul>
                        {bookings.map(booking => (
                            <li key={booking.id}>
                                <h3>{booking.trainName}</h3>
                                <p><strong>Location:</strong> {booking.location}</p>
                                <p><strong>Timing:</strong> {booking.timing}</p>
                                <button 
                                    onClick={() => handleDelete(booking.id)} 
                                    className="delete-btn">
                                    Cancel Booking
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No bookings found.</p>
                )}
            </div>
        </div>
    );
};

export default Details;
