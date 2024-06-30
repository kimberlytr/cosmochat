import React, { useState, useEffect } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import ChartHistory from './ChartHistory';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const Activity = () => {
  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState([
    { date: '2024-06-30', chats: [{ id: 1, message: 'Hello, What is the process to become a teacher?', sender: 'User' }] },
    { date: '2024-06-29', chats: [{ id: 2, message: 'Hi there, what is Javascript?', sender: 'User' }] },
    { date: '2024-06-29', chats: [{ id: 3, message: 'Hi there, what is React?', sender: 'User' }] },
    { date: '2024-06-28', chats: [{ id: 4, message: 'Hi there, what is redux?', sender: 'User' }] },
    { date: '2024-06-27', chats: [{ id: 5, message: 'Hi there, what is the difference between Java and Javascript?', sender: 'User' }] },
    { date: '2024-06-27', chats: [{ id: 6, message: 'Hi there, what is vs code?', sender: 'User' }] },
  ]);
  const [sessionData, setSessionData] = useState([]);

  useEffect(() => {
    const aggregatedSessions = aggregateSessionsByDate(sessions);
    setSessionData(aggregatedSessions);
    setLoading(false);
  }, [sessions]);

  const aggregateSessionsByDate = (sessions) => {
    const sessionMap = new Map();
    sessions.forEach(session => {
      const date = session.date;
      if (sessionMap.has(date)) {
        sessionMap.get(date).chats += session.chats.length;
      } else {
        sessionMap.set(date, { date: date, chats: session.chats.length });
      }
    });
    return Array.from(sessionMap.values());
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h5" gutterBottom>
        Chat Activity Over Time
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sessionData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar dataKey="chats" fill="#8884d8"  />
        </BarChart>
      </ResponsiveContainer>
      <Box sx={{ marginTop: '16px' }}>
        <Typography variant="h6" gutterBottom>
          Recent Chat Sessions
        </Typography>
        <ChartHistory sessions={sessions} />
      </Box>
    </Box>
  );
};

export default Activity;
