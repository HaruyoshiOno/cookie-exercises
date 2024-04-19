import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import "./assets/scss/style.scss"
import { ItemBox } from './compornent/top';
import { BrowserRouter } from 'react-router-dom';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <ItemBox />
    </BrowserRouter>
  </StrictMode>
);


