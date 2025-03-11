import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100vw;
  padding: 0 10rem;
  position: fixed !important; 
  top: 0;
  background-color: ${({ $isScrolled, $isHomePage }) =>
    !$isHomePage 
    ? '#2a2a2a' 
    : 
    $isScrolled 
    ? 'white' : 'transparent'};
  height: ${({ $isScrolled }) => ($isScrolled ? '7rem' : '10rem')};
  transition: background-color 1s ease, height 1s ease;
  z-index: 100; 

  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
    width: 100vw;
  }
`