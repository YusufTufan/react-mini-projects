// 1) ımport the React and ReactDom libraries
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(<App />);