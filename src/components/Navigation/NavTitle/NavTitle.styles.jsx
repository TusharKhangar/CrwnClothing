import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavbarTitle = styled(Link)`
  transition: font-size 1s ease, top 1s ease, 
    transform 1s ease, color 1s ease, 
    letter-spacing 1s ease;
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;


  &.large {
    position: fixed !important;
    top: 27vh;
    left: 50%;
    transform: translate(-48%, -50%);
    font-size: max(5rem, min(26rem, 16vw));
    color: ${({ $isHomePage }) => $isHomePage ? 'white' : ''};
    letter-spacing: 7rem;

    @media screen and (max-width: 1024px) {
      letter-spacing: 5rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 9rem;
      transform: translate(-50%, -100%);
      top: 22vh;
      letter-spacing: -0.5rem;
    }
  }

  &.small {
    position: fixed !important;
    top: 3.65rem;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    color: ${({ $isHomePage }) => $isHomePage ? '#121212' : 'white'};

    @media screen and (max-width: 480px) {
      font-size: 4rem;
      top: 3.9rem;
    }
  }
`;