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
import ServicesPage from './components/servicesPage';
import ContactPage from './components/contactPage';
//includes
import './assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Services' component={ServicesPage} />
        <Route exact path='/Contact' component={ContactPage} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
