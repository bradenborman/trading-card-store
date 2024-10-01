import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './TradingCardApp.scss';
import PageLayout from '../layout/PageLayout';
import Pokemon from '../pokemon/Pokemon';
import CardView from '../pokemon/cardview/CardView';

const TradingCardApp: React.FC = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/pokemon" replace />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon/view/:cardId" element={<CardView />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default TradingCardApp;