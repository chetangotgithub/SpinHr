import React, { useEffect } from 'react';
import Navbar from './Navbar';
import LeavesPage from './LeavesPage';
import SalaryPage from './SalaryPage';
import HolidaysPage from './HolidaysPage';
import '../styles/dashboard.css';

import { useSelector } from 'react-redux';
import HomePage from './homePage';
import AttendanceTable from './AttendancePage';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const currentState = useSelector((state) => state.navbar.value);
  const navigate = useNavigate();
  console.log(currentState.validateUser);

  useEffect(() => {
    if (currentState?.validateUser === null) {
      console.log('getting out ', currentState.validateUser === null);
      navigate('/login');
    }
  }, [currentState]);
  return (
    <div style={{ display: 'flex', backgroundColor: 'rgb(255, 254, 231)' }}>
      <Navbar />
      {currentState.home ? <HomePage /> : null}
      {currentState.leaves ? <LeavesPage /> : null}
      {currentState.holidays ? <HolidaysPage /> : null}
      {currentState.salary ? <SalaryPage /> : null}
      {currentState.attandance ? <AttendanceTable /> : null}
    </div>
  );
};

export default Dashboard;
