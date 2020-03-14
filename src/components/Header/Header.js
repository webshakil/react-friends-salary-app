import React from 'react';
import logo from '../../image/best-friends.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} className='circle' alt='' />
      <nav>
        <a href='/home'>Home</a>
        <a href='/friends'>Friends</a>
        <a href='/salary'>Salary</a>
      </nav>
    </div>
  );
};

export default Header;
