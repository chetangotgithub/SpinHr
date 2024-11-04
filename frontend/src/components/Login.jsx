import React from 'react';
import { useState } from 'react';
import loginImage from '../assets/benjamin-chambon-vRu-Bs27E2M-unsplash.jpg';
import SpinHRLogo from '../assets/spinhrlogin.png';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from './Alert';
import '../styles/signup.css';
import { useDispatch, useSelector } from 'react-redux';
import { validateUserAsync } from '../Redux/NavbarReducer';

const Login = () => {
  const [credentials, setcredentials] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log('credentials ', credentials);
    const response = await axios.post(
      'http://localhost:3000/login',
      credentials
    );
    console.log(response);
    if (response.data.status == 'failure') {
      alert('Invalid Credentials');
    } else {
      dispatch(validateUserAsync(response.data));
      navigate('/dashboard');

      setcredentials({
        username: '',
        password: '',
      });
    }
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '100vh',
            width: '100%',
            backgroundImage: `url("https://images.unsplash.com/photo-1516670428252-df97bba108d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFic3RyYWN0fGVufDB8MHwwfHx8MA%3D%3D")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        ></div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '30%',
          }}
        >
          <img
            src={SpinHRLogo}
            alt="login"
            width={100}
            style={{
              margin: '20px',
              border: '5px solid red', // Red border
              borderRadius: '50%', // Circular border radius
              overflow: 'hidden', // Ensures circular appearance if image is not square
            }}
          />

          <form
            onSubmit={handelSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px', // Adds space between form elements
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <label htmlFor="username">Username:</label>
              <input
                value={credentials.username}
                className="input-field"
                name="username"
                onChange={(event) => {
                  setcredentials({
                    ...credentials,
                    username: event.target.value,
                  });
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <label htmlFor="password">Password:</label>
              <input
                value={credentials.password}
                className="input-field"
                type="password"
                name="password"
                onChange={(event) => {
                  setcredentials({
                    ...credentials,
                    password: event.target.value,
                  });
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <button type="submit" className="submit-button">
                Sign In
              </button>
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <button type="button" className="submit-button">
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
