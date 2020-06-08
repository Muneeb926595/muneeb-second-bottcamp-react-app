import React from 'react';
import Dinner from './Dinner'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dinner dishName="Chiken Karaho" sweetName="kheer"/> <hr/>
      <Dinner dishName="Chiken Biryani" sweetName="Jalebi"/><hr/>
      <Dinner dishName="Chiken palao" sweetName="gajrela"/><hr/>
    </div>
  );
}

export default App;
