import styled from "styled-components";

// Riceve grid-area per poi 
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
  position: relative;
`

export const CategoryOverlay = styled.div`
  position: absolute; 
  bottom: 12%; /* Partenza a metà altezza del genitore */ 
  left: 50%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  gap: 4rem;
`

export const ExploreSelectionDiv = styled.div`
  padding: 2rem 2.4rem;
  font-size: 1.2rem;
  line-height: 1.6px;
  border: 1px solid white;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 3px;
  font-weight: 600;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(0.95);
  }

`

export const Explore = styled.span`
  z-index: 1; /* Il testo sta sopra al blur */
  
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

export const Title = styled.div`
  font-size: 3.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &::first-letter {
    font-size: 5rem;
  }
`

export const DirectoryItemContainer = styled.div`
  grid-area: ${({ $gridArea }) => $gridArea};
  min-width: 31%;
  height: 100%;
  max-height: 50rem;
  flex: 1 1 auto;
  margin: 0 0.75rem 1.5rem;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CategoryOverlay} {
      opacity: 0.9;
    }
  }

  &:first-child {
      margin-right: 0.75rem;
    }
  
    &:last-child {
      margin-left: 0.75rem;
    }
`