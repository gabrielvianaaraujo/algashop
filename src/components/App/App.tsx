import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from '../TestComponent';
import ClassComponent from '../ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <TestComponent />
          <ClassComponent name = "Senhor Dev"/>
        </p>
      </header>
    </div>
  );
}

export default App;
