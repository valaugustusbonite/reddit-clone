import React, { useState } from 'react';
import './navbar.scss';
import redditLogo from '../../assets/images/reddit_with_name.png';
import * as HiIcons from 'react-icons/hi';
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className='navbar-container'>
        <div className='logo-area'>
          <h3>weddit</h3>
        </div>
        <div className='search-area'>
          <FaIcons.FaRegEdit size='1.5rem' className='write-icon'/>
          {/* {
            isMenuOpen ? 
            (
              <GrIcons.GrClose size='1.5rem' onClick={toggleMenu} />
            ) :
            (
              <HiIcons.HiOutlineMenuAlt3 size='1.5rem' onClick={toggleMenu} />
            )
          } */}
        </div>
      </div>
      
    </>
  )
}

export default Navbar;
