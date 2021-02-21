import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>{title}</h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder'
};

//title에 넘겨줘야 되는 타입 설정
Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
