import React from 'react';
import BirthdayList from './Birthdaylist';
import Thoughtofday from './Thoughtofday';
import TaskComponent from './taskComponent';

const HomePage = () => {
  return (
    <div
      style={{
        width: '80%', // Occupies the remaining 80% width of the screen
        marginLeft: '20%', // Offsets the content by 20% to align with the navbar
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80vw',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '50vh',
            width: '80vw',
          }}
        >
          <BirthdayList />
          <Thoughtofday />
          <Thoughtofday />
        </div>
        <div
          className="taskbar"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            width: '80vw',
          }}
        >
          <TaskComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
