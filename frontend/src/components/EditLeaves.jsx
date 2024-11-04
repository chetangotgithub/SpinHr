import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LeaveTemplate from './leaveTemplate';

const EditLeaves = () => {
  const [leave, setleave] = useState({});
  const id = useParams().id;
  useEffect(() => {
    axios.get(`http://localhost:3000/leaves/${id}`).then((res) => {
      console.log('result', res);
      setleave(res.data.response);
    });
  }, []);

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/leaves/edit/${id}`, leave)
      .then(() => {
        alert('Updated leave Successfully');
        navigate('/dashboard');
      })
      .catch((error) => {
        alert('failed to update');
      });
  };

  return (
    <div>
      <LeaveTemplate
        leave={leave}
        setleave={setleave}
        handelSubmit={handelSubmit}
      />{' '}
    </div>
  );
};

export default EditLeaves;
