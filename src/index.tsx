import { StrictMode } from 'react';
import App from 'components/app/app';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store/store';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
