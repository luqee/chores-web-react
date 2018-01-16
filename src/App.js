import React, { Component } from 'react';
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
