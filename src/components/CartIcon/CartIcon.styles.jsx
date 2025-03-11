import styled from "styled-components";

import ShopBagSvg from '../../assets/shopping-bag.svg?react';

export const IconContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 1s ease;
  & > * {
    transition: color 1s ease; /* Applica la transizione anche ai figli */
  }
`

export const ShopBagIcon = styled(ShopBagSvg)`
  width: 3.8rem;
  height: 3.8rem;
  // Non in Homepage: #2a2a2a, oppure bianco o trasparente se 
  //  scrollato oppure no
  color: ${({ $isScrolled, $isHomePage }) =>
    !$isHomePage 
    ? 'white' 
    : 
    $isScrolled 
    ? '#2a2a2a' : 'white'};
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  bottom: 1.2rem;
  color: ${({ $isScrolled, $isHomePage }) =>
    !$isHomePage 
    ? 'white' 
    : 
    $isScrolled 
    ? '#2a2a2a' : 'white'};
`