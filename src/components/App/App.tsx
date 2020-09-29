import React, { useState } from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Input from '../../shared/Input';

function TestComponent (){
  return <img width = "16px" src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg" alt="" />
}

function App() {

  return (
    <div className="App">
      <Header title = "AlgaStock" />

      <Container>

      </Container>

    </div>
  );
}

export default App;
