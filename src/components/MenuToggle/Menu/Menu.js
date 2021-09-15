import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {

  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="home"></span>
        Home
      </a>
      <a href="/">
        <span role="img" aria-label="restaurants"></span>
        Restaurants
        </a>
      <a href="/">
        <span role="img" aria-label="login"></span>
        Login/Signup
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;