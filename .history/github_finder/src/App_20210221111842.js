import React, { Fragment, Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const name = 'Yurim';
    const loading = true;

    if (loading) {
      return <h4>loading</h4>;
    }

    return (
      <div className='App'>
        <h2>HELLO {name} !</h2>
      </div>
    );
  }
}

export default App;
