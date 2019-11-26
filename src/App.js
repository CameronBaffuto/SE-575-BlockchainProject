import React from 'react';
import './App.css';
import './components/Block.js';
import 'react-bootstrap';


import Routers from './containers/Routes'

function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;