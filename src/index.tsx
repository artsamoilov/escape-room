import { StrictMode } from 'react';
import App from 'components/app/app';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
