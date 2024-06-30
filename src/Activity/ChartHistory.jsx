import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const ChartHistory = ({ sessions }) => {
  return (
    <List>
      {sessions.map((session, index) => (
        <ListItem key={index} button component={Link} to={`/session/${session.id}`}>
          <ListItemText
            primary={`Date: ${session.date}`}
            secondary={`Last message: ${session.chats[session.chats.length - 1].message}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ChartHistory;
