import React from "react";
import {Route, Routes } from "react-router";
import Exercice001 from "./component/Exercice001";
import Exercice002 from "./component/Exercice002";
import './App.css';
import { Link } from "react-router-dom";
const App = () => {





  // console.log(passInput02)
  return (
    <div className="main">
      <nav>
        <Link to='/'>Exercice001</Link>
        <Link to='/Ex2'>Exercice002</Link>
      </nav>
      <Routes>
        <Route exect path="/" element={<Exercice001 />} />
        <Route path="*" element={<Exercice001 />} />
        <Route exect path="/Ex2" element={<Exercice002 />} />
      </Routes>
    </div>
  );
};

export default App;
