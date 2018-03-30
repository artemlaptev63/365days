import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Detail from './Detail';
import List from './List';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={List} />
          <Route path="/detail/:id" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
