import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <img src="{this.state.url}" className="bg-image" alt="{this.state.title}" />
          <h2>NASA Photo of the Day Generator</h2>
          <button>New Picture</button>
        </div>
      </div>
    );
  }
}

export default App;
