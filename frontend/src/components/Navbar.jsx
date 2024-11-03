import React from 'react';
import SpinHRLogo from '../assets/spinhrlogin.png';
import { useDispatch } from 'react-redux';
import { holidays, home, leaves, salary } from '../Redux/NavbarReducer';

const Navbar = () => {
  const dispatch = useDispatch();
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
        onClick={() => {
          dispatch(home());
        }}
      />
      <div className="button-container">
        <button onClick={() => dispatch(leaves())}>leaves</button>
        <button onClick={() => dispatch(holidays())}>holidays</button>
        <button onClick={() => dispatch(salary())}>Salary</button>
      </div>
    </div>
  );
};

export default Navbar;
