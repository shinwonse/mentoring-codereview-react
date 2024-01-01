import Exhibition from '@pages/Exhibition';
import { Home } from '@pages/Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Exhibition />} path="/exhibition/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
