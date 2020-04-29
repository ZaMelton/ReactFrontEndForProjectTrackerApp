import React from 'react';
import './App.css';
import { Navbar, ProjectBoard } from './Components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <ProjectBoard/>
      </div>
    </Router>
  );
}

export default App;
