import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  width: 100%;
`

export const NavLink = styled(Link)`
  padding-top: 0.9rem;
  cursor: pointer;
  transition: color 1s ease;
  z-index: 100;
  color: ${({ $isScrolled, $isHomePage }) =>
    !$isHomePage 
    ? 'white' 
    : 
    $isScrolled 
    ? '#2a2a2a' : 'white'};

  &:nth-child(2) { margin-left: auto; }

  @media screen and (max-width: 480px) {
      padding-left: 0.9rem;
    }
`