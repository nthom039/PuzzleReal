import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Cart from './Cart';
import Premade from './Premade';
import Home from './Home';
import MakeYourOwn from './MakeYourOwn';
import OurWork from './OurWork';
import Ambitious from './Ambitious';
import TopNav from './TopNav';

ReactDOM.render(
  <React.StrictMode>
    <style>{'body { background-color: #8ECAE6; }'}</style>
    <div className="App">
    <Router>
      <TopNav/>
      <br></br>
      <br></br>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/premade" element={<Premade/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/ambitious" element={<Ambitious/>} />
        <Route path="/OurWork" element={<OurWork/>} />
        <Route path="/MakeYourOwn" element={<MakeYourOwn/>} />
      </Routes>
    </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
