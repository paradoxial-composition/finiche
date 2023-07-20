// AppRouter.tsx
import React, { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Views/Login/Login';
import MoviesResult from './Views/MoviesResult/MoviesResult';
import ViewHistory from './Views/ViewHistory/ViewHistory';


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