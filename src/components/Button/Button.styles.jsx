import styled from "styled-components";

import { SpinnerContainer } from '../Spinner/Spinner.styles';

export const BaseButton = styled.button`
  min-width: 16.5rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.5px;
  line-height: 5rem;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.5rem;
  background-color: #2a2a2a;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;

  &:hover {
    background-color: white;
    color: #2e2e2e;
    border: 1px solid black;
  }
`

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  padding: 0;
  border-radius: 23px;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #2e2e2e;
  border: 1px solid black;
  border-radius: 23px;

  &:hover {
    background-color: #2a2a2a;
    color: white;
    border: none;
  }
`

export const ProductButton = styled(BaseButton)`
  border: 1px solid white;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px);
  border-radius: 3px;
  position: absolute;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(0.95); /* Slightly enlarges the div */
    background: rgba(255, 255, 255, 0.6); /* Slightly more opaque on hover */
    backdrop-filter: none;
  }
`

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 3rem;
  height: 3rem;
`
