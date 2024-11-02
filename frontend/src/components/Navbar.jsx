import React from 'react';
import SpinHRLogo from '../assets/spinhrlogin.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src={SpinHRLogo}
        alt="logo"
        width={100}
        style={{
          margin: '20px',
          border: '5px solid red', // Red border
          borderRadius: '50%', // Circular border radius
          overflow: 'hidden', // Ensures circular appearance if image is not square
        }}
      />
      <div className="button-container">
        <button>leaves</button>
        <button>holidays</button>
        <button>Salary</button>
      </div>
    </div>
  );
};

export default Navbar;
