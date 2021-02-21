import React, { Fragment, Component } from 'react';
import './App.css';

class App extends React.Component {
  foo = () => 'bar';
  render() {
    const name = 'Yurim';

    return (
      <div className='App'>
        <h2>HELLO {} !</h2>
      </div>
    );
  }
}

export default App;
