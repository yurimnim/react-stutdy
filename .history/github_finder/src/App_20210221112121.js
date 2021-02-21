import React, { Fragment, Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const name = 'Yurim';
    const loading = false;

    return (
      <div className='App'>
        <h1>My App</h1>
        {loading ? <h4>loading...</h4> : <h2>hello {name}</h2>}
      </div>
    );
  }
}

export default App;
