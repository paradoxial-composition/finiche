// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import MoviesResult from './components/MoviesResult/MoviesResult';
import ViewHistory from './components/ViewHistory/ViewHistory';

const AppRouter: React.FC = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/searchResult" element={<MoviesResult />}/>
          <Route path="/viewHistory" element={<ViewHistory />}/>
        </Routes>
    </Router>
  );
};

export default AppRouter;