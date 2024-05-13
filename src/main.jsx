import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import "./assets/scss/style.scss"
import { ItemBox } from './compornent/top';
import { Header } from './compornent/Header';
import Cart from './compornent/cart';
import { Provider } from 'react-redux';
import { store } from './compornent/store';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/cookie-exercises/' element={<ItemBox />} />
          <Route path='/cookie-exercises/Cart' element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);


