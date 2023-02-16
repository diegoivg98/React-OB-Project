import React from 'react';
import ReactDOM from 'react-dom/client';
/* Importing the bootstrap css file. */
import 'bootstrap/dist/css/bootstrap.css'

/* Importing the bootstrap icons. */
import 'bootstrap-icons/font/bootstrap-icons.css'

// ! IMPORTANTE: los estilos propios deben ir debajo del bootstrap
import './index.css';
import App from './App';
// import AppRouting from './AppRouting';
import reportWebVitals from './reportWebVitals';
//import AppRoutingFinal from './AppRoutingFinal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppRoutingFinal /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
