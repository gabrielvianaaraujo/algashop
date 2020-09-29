import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../Button';

function TestComponent() {
  return <img src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg" alt="search"/>
}


function App() {
  return (
    <div className="App">
      <Header title = "AlgaStock" />

      <div className="Container">
        <Button 
        onClick={() => window.alert('Clicado')}
        appendIcon={<TestComponent />}>
          Alert
        </Button>
      </div>

    </div>
  );
}

export default App;
