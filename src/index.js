import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home";
import 'bootstrap/dist/css/bootstrap.css';
import "semantic-ui-css/semantic.min.css"


ReactDOM.render(
    <Router>
        <Home />
    </Router>
    , document.getElementById('root'))