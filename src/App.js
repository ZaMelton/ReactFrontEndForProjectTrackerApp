import React from 'react';
import './App.css';
import { Navbar, ProjectBoard } from './Components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProjectBoard/>
    </div>
  );
}

export default App;
