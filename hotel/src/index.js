import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import About from './pages/AboutUs';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(  
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    <Route path="/logout" component={App} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
