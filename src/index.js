import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import SectionWipes from './SectionWipes';
import reportWebVitals from './reportWebVitals';
// import Fullpage from './Fullpage';
import {
  HashRouter
} from 'react-router-dom';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     {/* <Fullpage/> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter>
    {/* <App /> */}
    <SectionWipes/>
    </HashRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




