import React, { Component } from 'react';
import ProviderPanel from './providerPanel';
import ProviderBody from './providerBody';

class ProviderHome extends Component {
  render() {
    return (
      <div className='providerHome'>
        <ProviderPanel />
        <ProviderBody />
      </div>
    );
  }
}

export default ProviderHome;
