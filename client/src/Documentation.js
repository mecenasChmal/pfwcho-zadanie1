import React, { Component } from 'react';
import schema from './schema.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <header className="App-header">
            <h3>Dokumentacja</h3>
            <img src={schema} alt="architektura" />

            Aplikacja bazuje na przykładzie z lab. 9.<br/>
            Zmodyfikowano:<br/>

            server:<br/>
            <p>- index.js - zmieniono limit dla indeksu k do 20</p>
            <br/>

            client:<br/>
            <p>- App.js - wykorzystano router React <br/>
            - Fib.js - zmieniono sposób wyświetlania historii
            <br/>
            Utworzono komponenty:<br/>
            - Home.js - komponent strony głównej<br/>
            - Documentation.js - komponent dokumentacji</p><br/>
            
            worker:<br/>
            <p>- index.js - poprawiono funkcję obliczającą k-ty wyraz ciągu</p>
            <br/>

            <Link to="/">Home</Link>
            </header>
        </div>
    );
  };
