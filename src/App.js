import { Outlet} from "react-router-dom";
import './App.css';
import React from 'react';
import Navbar from "./component/navbar";

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
    </div>
    <Outlet />
    </>
  );
}

export default App;
