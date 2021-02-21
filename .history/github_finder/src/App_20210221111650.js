import React, { Fragment, Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const name = 'Yurim';

    const foo = () => 'bar';
    return (
      <div className='App'>
        <h2>HELLO {foo()} !</h2>
      </div>
    );
  }
}

export default App;
