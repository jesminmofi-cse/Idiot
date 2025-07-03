import React from 'react';
import Sidebar from './Sidebar';
import './HomePage.css';
import MoodChart from '../charts/MoodChart';
import SleepChart from '../charts/SleepChart';
import YogaChart from '../charts/YogaChart';
import WaterChart from '../charts/WaterChart';

const HomePage = () => {
    return (
        <div className="home-container">
            <Sidebar />
            <div className="main-content">
                <h2 className="dashboard-title">Your Activity Dashboard</h2>
                <p className="dashboard-subtitle"> Welcome to Chroniclely! Here you can manage your journal entries, plan your day, and reflect on your progress.</p>
                <div className="graph-section">
                    <MoodChart />
                    <SleepChart />
                    <YogaChart />
                    <WaterChart />
                </div>
            </div>
        </div>
    );
};
export default HomePage;