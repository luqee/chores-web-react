import React, { Component } from 'react';
import ClientPanel from './clientPanel';
import ClientBody from './clientBody';

class ClientHome extends Component {
  render() {
    return (
      <div className='clientHome'>
        <ClientPanel />
        <ClientBody />
      </div>
    );
  }
}

export default ClientHome;
