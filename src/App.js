import React from 'react';

import Normalize from 'react-normalize';

import logo from './logo.svg';  
import './App.css';
import HeaderMain from './components/HeaderMain/HeaderMain';

function App() {
  return (
    <div className="App">
      <Normalize/>
      <HeaderMain/>
    </div>
  );
}

export default App;
