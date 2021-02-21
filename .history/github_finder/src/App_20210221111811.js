import React, { Fragment, Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const name = 'Yurim';
    const loading = true;

    return (
      <div className='App'>
        <h2>HELLO {name} !</h2>
      </div>
    );
  }
}

export default App;
