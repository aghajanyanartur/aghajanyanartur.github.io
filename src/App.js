import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
