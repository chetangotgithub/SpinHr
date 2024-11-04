import React, { useEffect } from 'react';
import Navbar from './Navbar';
import LeavesPage from './LeavesPage';
import SalaryPage from './SalaryPage';
import HolidaysPage from './HolidaysPage';
import '../styles/dashboard.css';

import { useSelector } from 'react-redux';
import HomePage from './homePage';
const Dashboard = () => {
  const currentState = useSelector((state) => state.navbar.value);

  useEffect(() => {
    console.log('currentState ' + JSON.stringify(currentState));
  }, [currentState]);
  return (
    <div style={{ display: 'flex', backgroundColor: 'rgb(255, 254, 231)' }}>
      <Navbar />
      {currentState.home ? <HomePage /> : null}
      {currentState.leaves ? <LeavesPage /> : null}
      {currentState.holidays ? <HolidaysPage /> : null}
      {currentState.salary ? <SalaryPage /> : null}
    </div>
  );
};

export default Dashboard;
