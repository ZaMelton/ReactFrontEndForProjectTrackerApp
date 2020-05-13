import React from 'react';
import { Navbar, ProjectBoard, AddProjectTaskForm } from './Components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={ProjectBoard} />
          <Route exact path="/addProjectTaskForm" component={AddProjectTaskForm} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
