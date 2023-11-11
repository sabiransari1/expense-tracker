import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Signup } from '../pages/Signup';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { Tracker } from '../pages/Tracker';
import { Analytics } from '../pages/Analytics';
import { History } from '../pages/History';
import { PrivateRoutes } from './PrivateRoutes';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      />
      <Route path="/tracker" element={<Tracker />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};
