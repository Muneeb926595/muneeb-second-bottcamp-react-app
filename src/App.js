import React from 'react';
import Dinner from './Dinner'
import './App.css';

function App() {
  return (
    <div className="App">
      <Dinner dishName="Chiken kabab" sweetName="kheer"/> <hr/>
      <Dinner dishName="Chiken Biryani" sweetName="Jalebi"/><hr/>
    </div>
  );
}

export default App;
