import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StarRatings from './StarRatings.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRatings />
  </StrictMode>,
);
