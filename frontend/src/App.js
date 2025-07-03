import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Auth/LoginPage';
import RegisterPage from './Auth/RegisterPage';
import HomePage from './Planner/HomePage';
import YogaPage from './Planner/YogaPage';
import SleepPage from './Planner/SleepPage';
import WaterPage from './Planner/WaterPage';
import TaskPage from './Planner/TaskPage';
import MoodPage from './Planner/MoodPage';
import JournalPage from './Planner/JournalPage';
import GratitudePage from './Planner/GratitudePage';
import PeriodTrackerPage from './Planner/PeriodTrackerPage';
import WishPage from './Planner/wishList'; 
import BookTrackerPage from './Planner/BookTrackPage';
import CalendarView from './Planner/CalendarView';
import MeditationPage from './Planner/MeditationPage';
import BreathingPage from './Planner/BreathingPage';
import JuiceRecommendations from './Planner/JuiceRecommendation';
import PhotoJournalPage from './Planner/PhotoJournalPage';
function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
        <Route path="/yoga" element={isLoggedIn ? <YogaPage /> : <Navigate to="/" />} />
        <Route path="/sleep" element={isLoggedIn ? <SleepPage /> : <Navigate to="/" />} />
        <Route path="/water" element={isLoggedIn ? <WaterPage /> : <Navigate to="/" />} />
        <Route path="/task" element={isLoggedIn ? <TaskPage /> : <Navigate to="/" />} />
        <Route path="/mood" element={isLoggedIn ? <MoodPage /> : <Navigate to="/" />} />
        <Route path="/journal" element={isLoggedIn ? <JournalPage /> : <Navigate to="/" />} />
        <Route path='/photo' element ={isLoggedIn ? <PhotoJournalPage/>:<Navigate to='/'/>}/>
        <Route path="/gratitude" element={isLoggedIn ? <GratitudePage /> : <Navigate to="/" />} />
        <Route path="/books" element={isLoggedIn ? <BookTrackerPage /> : <Navigate to="/" />} />
        <Route path="/period" element={isLoggedIn ? <PeriodTrackerPage /> : <Navigate to="/" />} />
        <Route path="/wishlist" element={isLoggedIn ? <WishPage /> : <Navigate to="/" />} />
        <Route path="/meditation" element={isLoggedIn ? <MeditationPage/>:<Navigate to='/'/>}/> 
        <Route path='/breathing'element={isLoggedIn ?<BreathingPage/>:<Navigate to='/'/>}/>
        <Route path='/juice'element={isLoggedIn ?<JuiceRecommendations/>:<Navigate to='/'/>}/>
      </Routes>
    </Router>
  );
}

export default App;
