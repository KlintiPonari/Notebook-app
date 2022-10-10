import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h id="all-notes">All notes</h>
    <h id="new-note">My note<br></br>Category &#9679; Date</h>
    <App />
  </React.StrictMode>
);
