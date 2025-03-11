import React from 'react';

import CartDropdown from '../../CartDropdown/CartDropdown.component.jsx';
import NavLinks from '../NavLinks/NavLinks.component.jsx';
import NavTitle from '../NavTitle/NavTitle.component.jsx';

import {
  NavContainer,
} from './NavContainer.styles.jsx';

// Se inHome page && !isScrolled bianco
  // Se inHome page && isScrolled nero
  // se !inHomepage bianco
const NavigationContainer = ({ isScrolled, isHomePage, isCartOpen}) => {
  console.log(isCartOpen);
  return (
    <NavContainer
      $isScrolled={isScrolled}
      $isHomePage={isHomePage}
    >
      <NavTitle isScrolled={isScrolled} isHomePage={isHomePage} />
      <NavLinks isScrolled={isScrolled} isHomePage={isHomePage} />
      {isCartOpen && <CartDropdown />}
    </NavContainer>
  )
}

export default NavigationContainer