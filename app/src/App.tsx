import React from 'react';
import './App.scss';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Contact from './components/pages/Contact';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Content/>
        <Footer/>
        {/*TODO pass pages as properties*/}
        <Route path='/test' component={Contact} />
      </Router>
    </div>
  );
}

export default App;
