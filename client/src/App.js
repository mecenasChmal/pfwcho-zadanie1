import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Fib from './Fib';
import Documentation from './Documentation';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/fibcalc" exact component={Fib} />
          <Route exact path="/documentation" component={Documentation} />
        </div>
      </div>
    </Router>
  );
}

export default App;
