import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './components/landingPage';
//includes
import './assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
