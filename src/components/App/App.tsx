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

  const [street, setStreet] = useState('');

  return (
    <div className="App">
      <Header title = "AlgaStock" />

      <Container>
        <Button onClick={()=> window.alert('Olá')}
          appendIcon={<TestComponent />}>
          
        </Button>

        <Input
          label="Street"
          placeholder="E.g.: 15h Avenue"
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
        
      </Container>

    </div>
  );
}

export default App;
