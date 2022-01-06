import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Realizacja zadania nr1 w ramach laboratorium PFSwChO
            </a>
            <p>Jarosław Chmal</p> 
            <Link to="/fibcalc">Kalkulator</Link>
            <Link to="/documentation">Dokumentacja</Link>
            </header>
        </div>
    );
  };
