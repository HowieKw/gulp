import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { NavLink } from "react-router-dom";

const Menu = ({ open }) => {

  return (
    <StyledMenu open={open}>
      <nav>

        <NavLink exact to="/">
          Home
        </NavLink>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <NavLink exact to="/Restaurants">
          Restaurants
        </NavLink>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <NavLink exact to="/">
          Login/Signup
        </NavLink>

      </nav>
    </StyledMenu>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;