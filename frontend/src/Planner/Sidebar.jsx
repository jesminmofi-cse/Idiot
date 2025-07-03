import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3><Link to="/register" className="brand">Chroniclely</Link></h3>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/calendar">Calendar</Link></li>
                <li><Link to="/yoga">Yoga Tracker</Link></li>
                <li><Link to="/sleep">Sleep Tracker</Link></li>
                <li><Link to="/mood">Mood Tracker</Link></li>
                <li><Link to="/water">Water Tracker</Link></li>
                <li><Link to="/task">Task Tracker</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/photo">Photo Journal</Link></li>
                <li><Link to="/gratitude">Gratitude Journal</Link></li>
                <li><Link to ='/books'>Book Tracker</Link></li>
                <li><Link to="/period">Period Tracker</Link></li>
                <li><Link to="/wishlist">Wish List</Link></li>
                <li><Link to='/meditation'>Meditation</Link></li>
                <li><Link to ='/breathing'>Wim hoff's Breathing technique</Link></li>
                <li><Link to='/juice'>Magic potion for the day</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
