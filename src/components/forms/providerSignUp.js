import React, { Component } from 'react';

class ProviderSignUpForm extends Component {
  render() {
    return (
        <div className='form-wraper'>
        <form>
          <input type='text' name='first_name' placeholder='First Name' />
          <input type='text' name='last_name' placeholder='Last Name' />
          <input type='text' name='email_address' placeholder='E-mail address' />
          <input type='password' name='password' />
          <input type='password' name='conf_password'  />
          <input type='button' name='sign_up_button' value='Register as Provider' />
        </form>
        </div>
    );
  }
}

export default ProviderSignUpForm;
