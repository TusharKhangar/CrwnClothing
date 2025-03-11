import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../Button/Button.styles';


export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 0.5rem;
  border-radius: 5px;
`

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 35rem;
  align-items: center;
  position: relative;
  font-weight: 900;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 25.5rem;
    display: none;
  }

  & img {
    transition: transform 0.8s ease, box-shadow 0.3s ease;
  }

  &:hover {
    img {
      opacity: 1;
      transform: scale(0.97);
    }

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      opacity: 0.95;
      display: flex;
    }
  }
`

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;

  .name {
    width: 90%;
    margin-bottom: 1.5rem;
  }

  .price {
    width: 10%;
  }
`