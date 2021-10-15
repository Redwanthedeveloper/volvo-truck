import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className='nav_wrapper_main container'>
        <div className='logo'>
          <img src='/assets/images/logo.png' alt='Logo' />
        </div>
        <nav className='nav_wrapper'>
          <ul className='item_group'>
            <li className='nav_item'>
              <a className='nav_link' href='/'>
                Truck
              </a>
            </li>
            <li className='nav_item'>
              <a className='nav_link' href='/'>
                Services
              </a>
            </li>
            <li className='nav_item'>
              <a className='nav_link' href='/'>
                Dealders & Workshops
              </a>
            </li>
            <li className='nav_item'>
              <a className='nav_link' href='/'>
                News
              </a>
            </li>
            <li className='nav_item'>
              <a className='nav_link' href='/'>
                About
              </a>
            </li>
            <li className='nav_item'>
              <FontAwesomeIcon
                icon={faSearch}
                className='search_icon nav_link'
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
