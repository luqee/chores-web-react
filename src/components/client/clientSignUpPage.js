import React, { Component } from 'react';
import ClientSignUpForm from '../forms/clientSignUp';

class ClientSignUpPage extends Component {
  render() {
    return (
      <div className='page'>
      Client Sign up page.. <br/>
      Sign up to start doing your tasks with our providers.
      <ClientSignUpForm />
      </div>
    );
  }
}

export default ClientSignUpPage;
