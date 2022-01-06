import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  async pushSessionStorage(){
    var indexes = [];
    this.state.seenIndexes.map(({number}) => indexes.push(number));
    sessionStorage.setItem("indexes", indexes);
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });
    this.fetchValues();
    this.fetchIndexes();
    this.pushSessionStorage();
  };
  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          {key}. element ciągu wynosi {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    return (
      <header className="App-header">
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Wpisz indeks:</label><br/>
          <input
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Oblicz</button>
        </form>
        <details>
          <summary><h3>Historia</h3></summary>
        <h4>Ostatnio szukane wartości:</h4>
        {this.renderSeenIndexes()}
        <h4>Obliczone wartości:</h4>
        {this.renderValues()}
        </details>
        
      </div>
      <a href="/">Home</a>
      </header>
    );
  }
}

export default Fib;
