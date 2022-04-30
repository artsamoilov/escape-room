import { StrictMode } from 'react';
import App from 'components/app/app';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {fetchQuestsAction} from './store/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchQuestsAction());

render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
