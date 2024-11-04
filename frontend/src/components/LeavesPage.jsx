import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';

const LeavesPage = () => {
  const [leaves, setLeaves] = useState([]);
  const navigate = useNavigate();
  const currentState = useSelector((state) => state.navbar.value);
  console.log('Validating ' + JSON.stringify(currentState));
  const id = currentState.validateUser;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/leaves/user/${id}`)
      .then((res) => {
        console.log(res);
        setLeaves(res.data);
      })
      .catch((err) => {
        console.error('Error fetching leaves data:', err);
      });
  }, [leaves]);

  return (
    <div style={{ width: '80%', marginLeft: '20%', padding: '2rem' }}>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: '1rem' }}
        onClick={() => {
          navigate('/leaves/add');
        }}
      >
        Add Leave
      </Button>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Index</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Reason</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Status</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Start Date</strong>
              </TableCell>
              <TableCell align="center">
                <strong>End Date</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Edit</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaves.length > 0 ? (
              leaves.map((leave, index) => (
                <TableRow key={leave._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell align="center">{leave.reason}</TableCell>
                  <TableCell align="center">{leave.status}</TableCell>
                  <TableCell align="center">
                    {formatDate(leave.startDate)}
                  </TableCell>
                  <TableCell align="center">
                    {formatDate(leave.endDate)}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      component={Link}
                      to={`/leaves/edit/${leave._id}`}
                    >
                      <EditIcon color="primary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <Typography variant="body1">No leaves found.</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LeavesPage;
