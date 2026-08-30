import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Resume from './Resume';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const isResumePage = window.location.pathname.replace(/\/+$/, '') === '/resume';

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {isResumePage ? <Resume /> : <App />}
  </React.StrictMode>
);