import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
