import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import "./assets/scss/style.scss"
import { ItemBox } from './compornent/top';
import Cart from './compornent/Cart';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='cookie-exercises/' element={<ItemBox />} />
        <Route path='cookie-exercises/cart' element={<Cart />} />
      </Routes>
    </Router>
  </StrictMode>
);


