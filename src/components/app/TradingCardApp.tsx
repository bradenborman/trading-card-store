import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './TradingCardApp.scss';
import PageLayout from '../layout/PageLayout';
import Home from '../home/Home';

const TradingCardApp: React.FC = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default TradingCardApp;