import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Activity from './Activity/index';
import ChartHistory from './Activity/ChartHistory';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/session/:id" element={<ChartHistory />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
