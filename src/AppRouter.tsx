// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login'; // Replace with your component for the home page
import MoviesResult from './components/MoviesResult/MoviesResult'; // Replace with your component for the about page

const AppRouter: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/searchResult" element={<MoviesResult />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;