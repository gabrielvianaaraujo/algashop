import React, { useState } from 'react';
import './App.css';
import Header from '../Header';
<<<<<<< HEAD
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Input from '../../shared/Input';
=======
import Button from '../Button';

function TestComponent() {
  return <img src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg" alt="search"/>
}
>>>>>>> 02-07-entendendo-tudo-sobre-props

function TestComponent (){
  return <img width = "16px" src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg" alt="" />
}

function App() {

  return (
    <div className="App">
      <Header title = "AlgaStock" />

<<<<<<< HEAD
      <Container>

      </Container>
=======
      <div className="Container">
        <Button 
        onClick={() => window.alert('Clicado')}
        appendIcon={<TestComponent />}>
          Alert
        </Button>
      </div>
>>>>>>> 02-07-entendendo-tudo-sobre-props

    </div>
  );
}

export default App;
