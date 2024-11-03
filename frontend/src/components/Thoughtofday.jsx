import React from 'react';
import { Card, Typography, Box } from '@mui/material';

// Sample thought data
const thoughtData = [
  { text: 'Believe in yourself and all that you are.' },
  { text: 'Every day is a second chance.' },
  { text: 'The best way to get started is to quit talking and begin doing.' },
  // Add more thoughts as needed
];

const ThoughtOfDay = () => {
  // Select the first thought for simplicity, or you could pick a random one
  const thoughtOfTheDay = thoughtData[0];

  return (
    <Card
      style={{
        width: '33vh',
        padding: '16px',
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '30vh',
      }}
    >
      <Box>
        <Typography variant="h6" gutterBottom>
          Thought of the Day
        </Typography>
        <Typography variant="body1">{thoughtOfTheDay.text}</Typography>
      </Box>
    </Card>
  );
};

export default ThoughtOfDay;
