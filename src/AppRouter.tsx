// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import MoviesResult from './components/MoviesResult/MoviesResult';

const AppRouter: React.FC = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/searchResult" element={<MoviesResult />}/>
        </Routes>
    </Router>
  );
};

export default AppRouter;