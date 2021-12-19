import React from 'react';
import icon from './../../assets/img/adidas_logo.png';

const Header = () => {
  return (
    <div className='header'>
      <img className="icon" alt="adidas" src={icon}/>
      <h1 className='header-title'>Your Adidas Team</h1>
    </div>
  )
}

export default Header;