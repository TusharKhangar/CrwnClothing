import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80rem;
  margin-bottom: 1.5rem;
  max-height: 15rem;
  min-height: 15rem;
`

export const ItemImg = styled.img`
  background-image: ${({ $imageUrl }) => `url(${ $imageUrl })`};
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 60%;
`

export const ItemDetails = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;
`

export const Name = styled.span`
  font-size: 1.6rem;
  font-weight: 900;
`
