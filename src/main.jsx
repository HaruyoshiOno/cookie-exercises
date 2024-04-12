import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Shop  from './component/shop.jsx'
import Cart from './component/cart.jsx'

import ReactDOM from 'react-dom/client'
import Header from './component/header.jsx'
import './scss/index.scss'
import './scss/header.scss'
import './scss/shop.scss'
import './scss/cart.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='cookie-exercises/' element={<Shop />} />
        <Route path='cookie-exercises/cart' element={<Cart />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
