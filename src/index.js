import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Apidatashow from './Apidatashow';
// import UsersData from './components/UsersData';  
// import BasicTable from './components/BasicTable';
//  import EmployeelistFun from './components/EmployeelistFun';
// import DataAdd from './components/DataAdd';
// import Datafetch from './components/Datafetch';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    {/* <DataAdd />
    <Datafetch /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
