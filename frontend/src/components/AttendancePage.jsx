import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from '@mui/material';
import {
  format,
  addDays,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
} from 'date-fns';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AttendanceTable = () => {
  const [attendance, setAttendance] = useState([]);
  const dayPresent = (date) => {
    const day = new Date(date).getDay();
    console.log(new Date(date).getDay());
    if (day == 0 || day == 6) {
      return 'Holiday';
    }

    if (new Date().getDate() == new Date(date).getDate()) {
      return 'Present';
    }
    if (new Date() > new Date(date)) {
      return 'Absent';
    }
  };

  const currentstate = useSelector((state) => state.navbar.value);
  const userid = currentstate.validateUser;
  console.log(userid);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/attandance/${userid}`
        );
        const attendanceData = response.data.response[0].attandance;
        console.log(attendanceData);

        if (attendance?.length === 0) {
          const daysOfMonth = eachDayOfInterval({
            start: startOfMonth(new Date()),
            end: endOfMonth(new Date()),
          }).map((date) => ({
            date,
            day: format(date, 'EEEE'),
            isPresent: dayPresent(date),
          }));
          setAttendance(daysOfMonth);
        } else {
          setAttendance(attendanceData);
        }
        console.log(attendance);
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    };

    fetchAttendance();
  }, []); // Add `userid` as a dependency if it may change

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        marginLeft: '20%',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Day</TableCell>
              <TableCell>Attendance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendance.map((day, index) => (
              <TableRow key={day.date}>
                <TableCell>{format(day.date, 'yyyy-MM-dd')}</TableCell>
                <TableCell>{day.day}</TableCell>
                <TableCell>{day.isPresent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AttendanceTable;
