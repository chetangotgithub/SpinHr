import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpinHRLogo from '../assets/spinhrlogin.png';
import '../styles/signup.css';
import Alert from './Alert';

const Signup = () => {
  const [userDetail, setuserDetails] = useState({
    username: '',
    password: '',
    retype: '',
    email: '',
  });

  const navtigate = useNavigate();
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (userDetail.password !== userDetail.retype) {
      <Alert message={'Password does not match'} />;
      return;
    }

    await axios
      .post('http://localhost:3000/', {
        username: userDetail.username,
        password: userDetail.password,
        email: userDetail.email,
      })
      .then((res) => {
        console.log(res);
        alert(`Successfully added User ${userDetail.username}`);
        navtigate('/login');
      })
      .catch((error) => {
        console.log(error);
        alert(`failes password does not match`);
      });

    setuserDetails({ username: '', password: '', retype: '', email: '' });
  };
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
      }}
    >
      {/* Container for the logo and form, set to 30% width */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '30%',
          gap: '15px',
          border: '2px solid #ccc', // Set the desired border style
          padding: '20px', // Optional padding for spacing inside the div
          boxSizing: 'border-box',
          backgroundColor: '#27428a',
        }}
      >
        <img
          src={SpinHRLogo}
          alt="#spinHr"
          style={{ border: '5px solid red', borderRadius: '50%' }}
          width={150}
        />
        <form
          onSubmit={handelSubmit}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '15px',
            color: 'white',
          }}
        >
          <div>
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              name="username"
              value={userDetail.username}
              className="input-field"
              onChange={() =>
                setuserDetails({
                  ...userDetail,
                  username: event.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              value={userDetail.password}
              className="input-field"
              onChange={() =>
                setuserDetails({
                  ...userDetail,
                  password: event.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="retype">Retype Password : </label>
            <input
              type="password"
              name="retype"
              value={userDetail.retype}
              className="input-field"
              onChange={() =>
                setuserDetails({
                  ...userDetail,
                  retype: event.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email Id : </label>
            <input
              type="text"
              name="email"
              value={userDetail.email}
              className="input-field"
              onChange={() =>
                setuserDetails({
                  ...userDetail,
                  email: event.target.value,
                })
              }
            />
          </div>

          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* New div for the image, set to 70% width */}
      <div
        style={{
          width: '70%',
          backgroundImage:
            'url(https://plus.unsplash.com/premium_photo-1673480196073-538e6ba9d041?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmxkfGVufDB8fDB8fHww)', // Replace 'yourImageURL' with the actual image URL or import
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
};

export default Signup;
