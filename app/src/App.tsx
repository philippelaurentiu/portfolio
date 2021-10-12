import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path="/test" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
