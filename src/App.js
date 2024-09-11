import {useState} from 'react';
import './App.css';
import jogoDados from './dadoComponent.js';
import React from 'react';
import DadoComponent from './dadoComponent.js';

function App() {
  return (
    <div className="App">
      <DadoComponent></DadoComponent>
    </div>
  );
}

export default App;


// Math.floor(Math.random() * 6) + 1
// const d1 e d2