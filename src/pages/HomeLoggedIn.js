import '../index.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

const HomeLoggedIn = (e) => {
    const handleClick = () => {
        console.log('clicked');
    };

    return (
        <div className="home-logged-in" id="home2-box">
            {/* <h2>Start by adding your child:</h2> */}
            <button onClick={handleClick} className="add-child-button">Add Child</button>
        </div>
    );
};

export default HomeLoggedIn;