import React from 'react';
import './App.css';
import { Navbar, ProjectBoard, AddProjectTaskForm } from './Components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={ProjectBoard} />
        <Route exact path="/addProjectTaskForm" component={AddProjectTaskForm} />
      </div>
    </Router>
  );
}

export default App;
