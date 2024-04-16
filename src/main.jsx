import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './compornent/Header';


import "./assets/scss/style.scss"
import { ItemBox } from './compornent/top';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <ItemBox />
  </StrictMode>
);


