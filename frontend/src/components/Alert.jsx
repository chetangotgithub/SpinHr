import React from 'react';
import '../styles/alert.css'; // Import the CSS file for styling

const Alert = ({ message }) => {
  console.log('Alert');
  return (
    <div className="alert">
      <span>{message}</span>
      <button className="close-btn">
        &times; {/* This will display a close "x" icon */}
      </button>
    </div>
  );
};

export default Alert;
