import styled, { css } from "styled-components";

const subColor = '#61656b';
const mainColor = '#0f6bc1';

// Definisco un mixin per spostare il testo e rimpicciolirlo
export const shrinkLabelStyles = css`
  top: -1.7rem;
  font-size: 1.4rem;
  color: ${mainColor};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 1rem;
  transition: 300ms ease all;
  

  ${({ $shrink }) => $shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: #8da1ae67;
  color: ${subColor};
  font-size: 1.6rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 10px;
  border-bottom: 1px solid ${mainColor};
  margin: 3rem 0;

  &:focus {
    outline: none;
  }
  // Seleziona l'elemento fratello all'interno dello stesso div
  // Attiva shrinkLabel anche quando è attivo
  // focus input senza che l'input.value sia 0
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`

export const Group = styled.div`
  position: relative;
  margin: 2rem 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`