import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import "./assets/scss/style.scss"
import { ItemBox } from './compornent/top';
import { HashRouter } from 'react-router-dom';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HashRouter>
    <ItemBox />
    </HashRouter>
  </StrictMode>
);


