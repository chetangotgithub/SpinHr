import React from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';

// Sample data for demonstration
const birthdayData = [
  { name: 'John Doe', email: 'john.doe@example.com', dob: '1990-11-02' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', dob: '1995-11-02' },
  { name: 'Alice Brown', email: 'alice.brown@example.com', dob: '1988-11-02' },
  { name: 'Alice Brown', email: 'alice.brown@example.com', dob: '1988-11-02' },
  { name: 'Alice Brown', email: 'alice.brown@example.com', dob: '1988-11-02' },
  { name: 'Alice Brown', email: 'alice.brown@example.com', dob: '1988-11-02' },
  { name: 'Alice Brown', email: 'alice.brown@example.com', dob: '1988-11-02' },
  { name: 'Alice Brown', email: 'alice.brown@example.com', dob: '1988-11-02' },
  // Add more entries as needed
];

const BirthdayList = () => {
  const today = new Date().toISOString().slice(5, 10); // Format today's date as "MM-DD"

  // Filter birthdayData to show only those whose DOB matches today's date
  const todayBirthdays = birthdayData.filter(
    (person) => person.dob.slice(5, 10) === today
  );

  return (
    <Card
      style={{
        width: '33vh',
        padding: '16px',
        maxHeight: '30vh',
        overflowY: 'auto',
        margin: '10px',
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Today's Birthdays
      </Typography>
      <List>
        {todayBirthdays.length > 0 ? (
          todayBirthdays.map((person, index) => (
            <ListItem key={index} divider>
              <ListItemText primary={person.name} secondary={person.email} />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1" align="center">
            No birthdays today.
          </Typography>
        )}
      </List>
    </Card>
  );
};

export default BirthdayList;
