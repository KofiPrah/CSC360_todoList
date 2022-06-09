import React from 'react';
import ReactDOM from 'react-dom';
import { RequestProvider } from 'react-request-hook';
import App from './App';
import axios from 'axios';

//const root=ReactDOM.createRoot(document.getElementById('root'));

const axiosInstance=axios.create({baseURL: "http://localhost:3000/api/"});

ReactDOM.render(
  <React.StrictMode>
  <RequestProvider value ={axiosInstance}>
    <App />
  </RequestProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

