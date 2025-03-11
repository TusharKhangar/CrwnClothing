import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../Button/Button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 38rem;
  height: 45rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Ombra esterna */
  background-color: white;
  border-radius: 5px;
  top: 7rem;
  right: 11rem;
  z-index: 200;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  @media screen and (max-width: 480px) {
    width: 99vw;
    right: 0.4rem;
    height: calc(100vh - 12rem);
  }  
`
export const EmptyMessage = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`

export const CartItemsContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 100;
`

