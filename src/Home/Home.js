import React from 'react';
import './Home.css';
import logo from '../raillogo/logo.jpg';
import searchimg from '../raillogo/searchimg.jpg';
import instagram from '../raillogo/instagram.png';
import twitter from '../raillogo/twitter.png';
import facebook from '../raillogo/facebook.png';
import telegram from '../raillogo/telegram.png';
import whatsapp from '../raillogo/whatsapp.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const trains = [
        {
            id: 1,
            name: 'City Travels',
            img: 'https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/172081/gallery_g4.jpg',
            location: 'Mumbai to Delhi',
            timing: '10:00 AM - 08:00 PM',
        },
        {
            id: 2,
            name: 'A1 Travels',
            img: 'https://s3-ap-southeast-1.amazonaws.com/rbplus/BusImage/Domestic/20024_1089_2.png',
            location: 'Bangalore to Chennai',
            timing: '06:00 AM - 12:00 PM',
        },
        {
            id: 3,
            name: 'Rainbow Travels',
            img: 'https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/90290/gallery_02.png',
            location: 'Kolkata to Patna',
            timing: '08:00 AM - 04:00 PM',
        },
        {
            id: 4,
            name: 'Rathimeena Travels',
            img: 'https://i.ytimg.com/vi/a2DcV7MMBWg/sddefault.jpg',
            location: 'Hyderabad to Bangalore',
            timing: '07:00 AM - 02:00 PM',
        },
        {
            id: 5,
            name: 'S.E.T.C',
            img: 'https://media.assettype.com/puthiyathalaimurai%2F2023-04%2F27a8bad0-2556-44a0-b3ac-f9b3b37f1edd%2Fsetc.jpg?rect=0%2C0%2C711%2C400',
            location: 'Hyderabad to Bangalore',
            timing: '07:00 AM - 02:00 PM',
        },
        {
            id: 6,
            name: 'S.E.T.C',
            img: 'https://media.assettype.com/puthiyathalaimurai%2F2023-04%2F27a8bad0-2556-44a0-b3ac-f9b3b37f1edd%2Fsetc.jpg?rect=0%2C0%2C711%2C400',
            location: 'Hyderabad to Bangalore',
            timing: '07:00 AM - 02:00 PM',
        },
        {
            id: 6,
            name: 'S.E.T.C',
            img: 'https://media.assettype.com/puthiyathalaimurai%2F2023-04%2F27a8bad0-2556-44a0-b3ac-f9b3b37f1edd%2Fsetc.jpg?rect=0%2C0%2C711%2C400',
            location: 'Hyderabad to Bangalore',
            timing: '07:00 AM - 02:00 PM',
        },
    ];

    const navigate = useNavigate();
    const goToSignup = () => navigate('/Sign');
    const goToLogin = () => navigate('/');
    const goTodetails = () => navigate('/details');
    const goToAboutus = () => navigate('/about');

    const handleBooking = (train) => {
        const bookingData = {
            trainId: train.id,
            trainName: train.name,
            location: train.location,
            timing: train.timing,
        };

        axios.post('http://localhost:3000/cart', bookingData)
            .then((response) => {
                console.log('Success:', response.data);
                alert(`${train.name} booked successfully!`);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Booking failed, please try again.');
            });
    };

    return (
        <div className="home-wrapper">
            <header className="header">
                <img src={logo} alt="Railway Logo" className="logo" />
                <nav className="navigation">
                    <ul>
                        <li onClick={goToLogin}>Login</li>
                        <li onClick={goToSignup}>Register</li>
                        <li onClick={goTodetails}>Details</li>
                        <li onClick={goToAboutus}>About Us</li>
                    </ul>
                </nav>
            </header>

            <div className="hero-section">
                <div className="search-box">
                    <input type="text" placeholder="Search for Booking" />
                    <img src={searchimg} alt="Search" className='box'/>
                </div>
                <h1 className="main-title">Explore & Book Your Bus Journey</h1>
            </div>

            <section className="train-section">
                {trains.map(train => (
                    <div key={train.id} className="train-card">
                        <img src={train.img} alt={train.name} className="train-image" />
                        <div className="train-info">
                            <h3>{train.name}</h3>
                            <p><strong>Location:</strong> {train.location}</p>
                            <p><strong>Timing:</strong> {train.timing}</p>
                            <button onClick={() => handleBooking(train)}>Book Now</button>
                        </div>
                    </div>
                ))}
            </section>

            <footer className="footer">
                <div className="contact-section">
                    <h2>Stay Connected</h2>
                    <div className="social-links">
                        <img src={instagram} alt="Instagram" />
                        <img src={twitter} alt="Twitter" />
                        <img src={facebook} alt="Facebook" />
                        <img src={telegram} alt="Telegram" />
                        <img src={whatsapp} alt="WhatsApp" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
