import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { DiaryProvider } from './context/DiaryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DiaryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DiaryProvider>
  </React.StrictMode>
);
