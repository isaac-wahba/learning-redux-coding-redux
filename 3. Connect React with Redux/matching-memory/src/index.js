import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

import { store } from './app/store.js';
// Add import statement below
import { Provider } from 'react-redux';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);


root.render(
  // Implement Provider component with store below
  <Provider store={store}>
    <App />
  </Provider>
);
