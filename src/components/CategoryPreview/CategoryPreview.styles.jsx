import styled from "styled-components";

import { Link } from "react-router-dom";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  padding: 40px;

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`

export const Title = styled(Link)`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
  cursor: pointer;
  color: black;
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }
`