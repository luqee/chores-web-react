import React, { Component } from 'react';

class ClientSignUpForm extends Component {
  render() {
    return (
        <div className='form-wraper'>
        <form>
          <input type='text' name='user_name' placeholder='First Name' />
          <input type='text' name='phone_number' placeholder='Your Phone number' />
          <input type='password' name='password' />
          <input type='password' name='conf_password'  />
          <input type='button' name='sign_up_button' value='Register as Provider' />
        </form>
        </div>
    );
  }
}

export default ClientSignUpForm;
