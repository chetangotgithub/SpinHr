import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import LeaveTemplate from './leaveTemplate';

const AddLeaves = () => {
  const [leave, setleave] = useState({
    reason: '',
    startDate: null,
    endDate: null,
  });
  const currentState = useSelector((state) => state.navbar.value);
  console.log(JSON.stringify(currentState));
  const id = currentState.validateUser;

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:3000/leaves/${id}`, leave)
      .then((res) => {
        alert(`Successfully added leave`);
        navigate('/dashboard');
      })
      .catch((error) => {
        alert(`Failed to add leaves`);
      });

    setleave({
      reason: '',
      startDate: null,
      endDate: null,
    });
  };
  return (
    <>
      <LeaveTemplate
        leave={leave}
        setleave={setleave}
        handelSubmit={handelSubmit}
      />
    </>
  );
};

export default AddLeaves;
