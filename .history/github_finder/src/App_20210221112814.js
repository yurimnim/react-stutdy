import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' />
      </div>
    );
  }
}

export default App;
