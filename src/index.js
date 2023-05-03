import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import "react-quill/dist/quill.snow.css";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import ConfirmationPopup from './components/ConfirmationPopup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfirmationPopup />
      <App />
    </PersistGate>
  </Provider>
);

