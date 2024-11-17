import React from 'react';
import './HomePage.css'; // Import the CSS file for HomePage styling
import { FaUserPlus, FaClipboardList, FaUsers, FaListAlt } from 'react-icons/fa'; // Import icons

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h1 className="title">Greetings, CRM Campaign Manager</h1>
      <p className="intro-text">Taskbar Buttons Information: </p>
      <div className="features-container">
        <div className="feature-card">
          <FaUserPlus className="feature-icon" />
          <div className="feature-content">
            <h3>Create Customer Button</h3>
            <p>Creates a new user.</p>
          </div>
        </div>
        <div className="feature-card">
          <FaClipboardList className="feature-icon" />
          <div className="feature-content">
            <h3>Create Order Button</h3>
            <p>Creates an order based on a user.</p>
          </div>
        </div>
        <div className="feature-card">
          <FaUsers className="feature-icon" />
          <div className="feature-content">
            <h3>Create Audience Button</h3>
            <p>
              To create a campaign based on an audience of customers :
              <ul className="criteria-list">
                <li>Customers with total spends {'>'} INR 10,000</li>
                <li>Customers with total spends {'>'} INR 10,000 AND max number of visits are 3</li>
                <li>Customers not visited in the last 3 months</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="feature-card">
          <FaListAlt className="feature-icon" />
          <div className="feature-content">
            <h3>Campaign List Button</h3>
            <p>Details of campaigns created till now with their details.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
