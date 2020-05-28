import React from 'react';
import './App.css';
import './components/controls/Controls';
import Controls from './components/controls/Controls';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
      <Controls/>  
      </header>
      
    </div>
  );
}

export default App;
