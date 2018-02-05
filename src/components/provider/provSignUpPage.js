import React, { Component } from 'react';
import ProviderSignUpForm from '../forms/providerSignUp';

class ProviderSignUpPage extends Component {
  render() {
    return (
      <div className='page'>
      Provider Sign up page.. <br/>
      Sign up to start offering your services to a ready market.
      <ProviderSignUpForm />
      </div>
    );
  }
}

export default ProviderSignUpPage;
