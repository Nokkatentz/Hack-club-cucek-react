import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home';
import Project from './page/project';


export default function Index(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);
reportWebVitals();
