import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <header>
        <div className='logo'>
        Chores
        </div>
        <nav>
            <ul>
                <li className='first'>
                <Link to='/'>About </Link>
                </li>
                <li>
                <Link to='/Services'>Services </Link>
                </li>
                <li className='last'>
                <Link to='/Contact'>Contact </Link>
                </li>

            </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
