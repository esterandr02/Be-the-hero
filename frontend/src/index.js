import React from 'react';
import ReactDOM from 'react-dom';  // integracao do react com a DOM
import App from './App';

ReactDOM.render(   // colocar em tela
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);