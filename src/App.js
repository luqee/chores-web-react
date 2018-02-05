import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './components/landing/landingPage';
import ServicesPage from './components/landing/servicesPage';
import ContactPage from './components/landing/contactPage';
import ProviderHome from './components/provider/providerHome';
import ClientHome from './components/client/clientHome';
import ProviderSignUpPage from './components/provider/provSignUpPage';
import ClientSignUpPage from './components/client/clientSignUpPage';
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
        <Route exact path='/Provider' component={ProviderHome} />
        <Route exact path='/Client' component={ClientHome} />
        <Route exact path='/ClientSignUp' component={ClientSignUpPage} />
        <Route exact path='/ProviderSignUp' component={ProviderSignUpPage} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
