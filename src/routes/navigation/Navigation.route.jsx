import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomeImage from '../../components/HomeImage/HomeImage.component.jsx';
import FooterBar from '../../components/FooterBar/FooterBar.component.jsx';
import ScrollHandler from '../../components/Navigation/ScrollHandler.component.jsx';
import NavigationContainer from '../../components/Navigation/NavContainer/NavContainer.component.jsx';

import { selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { NoImageContainer, MainContent } from './Navigation.styles.jsx';

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAuthPage = location.pathname === '/auth';

  const navigationProps = {
    isHomePage,
    isCartOpen,
  };
  
  return (
    <>
      {isHomePage ? (
        <HomeImage>
          <ScrollHandler>
          {({ isScrolled }) => <NavigationContainer isScrolled={isScrolled} {...navigationProps} />}
          </ScrollHandler>
        </HomeImage>
      ) : (
        <NoImageContainer>
          <NavigationContainer isScrolled={true} {...navigationProps} />
        </NoImageContainer>
      )}
      <MainContent>
        <Outlet />
      </MainContent>
      <FooterBar isAuthPage={isAuthPage}/>
    </>
  );
};

export default Navigation;
