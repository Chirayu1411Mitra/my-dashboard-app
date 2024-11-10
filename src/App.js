import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserInfo from './components/User Info';  // Ensure this import is correct
import UpcomingEvents from './components/UpcomingEvents';
import './App.css';

function App() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <UserInfo />  {/* Corrected here */}
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
}

export default App;