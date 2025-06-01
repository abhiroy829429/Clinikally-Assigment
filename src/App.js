import React from 'react';
import './App.css';
import Autocomplete from './components/Autocomplete/Autocomplete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Search</h1>
      </header>
      <main>
        <Autocomplete />
      </main>
    </div>
  );
}

export default App;
