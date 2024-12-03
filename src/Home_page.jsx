// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Calendar from '../components/Calendar';
import Community from '../components/Community';
import MentorDashboard from '../components/MentorDashboard';
import PersonalChat from '../components/PersonalChat';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <h2>Welcome to the Home Page</h2>
        <p>This is the main content of the home page.</p>
        <Calendar />
        <Community />
        <MentorDashboard />
        <PersonalChat />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;