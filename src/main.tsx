import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RetroPortfolio from './RetroPortfolio';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RetroPortfolio />
  </StrictMode>,
);
