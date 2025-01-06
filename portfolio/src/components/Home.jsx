import React from 'react';
import './styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <img src="images.png" alt="Profile" className="profile-image" />
            <div className="info-container">
                <h1>Name</h1>
                <p>Description</p>
            </div>
        </div>
    );
};

export default Home;