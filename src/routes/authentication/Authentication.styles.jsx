import styled from "styled-components";

export const Body = styled.div`
  background-color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 73.5vh;
`;

export const Container = styled.div`
  background-color: #212121;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 868px;
  max-width: 100%;
  min-height: 480px;
  font-family: 'poppins', sans-serif;

  &.right-panel-active .sign-in-container {
    transform: translateX(100%);
    
    @media (max-width: 768px) {
      transform: translateX(-100%);
    }
  }

  &.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;

    @media (max-width: 768px) {
      transform: translateX(0);
      opacity: 1;
      z-index: 5;
      animation: none;
    }
  }

  &.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  &.right-panel-active .overlay {
    transform: translateX(50%);
  }

  &.right-panel-active .overlay-left {
    transform: translateX(0);
  }
  
  &.right-panel-active .overlay-right {
    transform: translateX(20%);
  }

  @keyframes show {
      0%,
      49.99% {
          opacity: 0;
          z-index: 1;
      }

      50%,
      100% {
          opacity: 1;
          z-index: 5;
      }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  background-color: #eeeeee;
`;

export const SignUpContainer = styled(FormContainer)`
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;

  @media (max-width: 768px) {
    transform: translateX(100%);
    opacity: 1;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
  }
`;

export const SignInContainer = styled(FormContainer)`
  left: 0;
  width: 50%;
  z-index: 2;
  
  @media (max-width: 768px) {
    opacity: 1;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  background-image: url("https://i.ibb.co/5LnNwVN/Authram.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const OverlayLeft = styled(OverlayPanel)`
  transform: translateX(-20%);
`;

export const OverlayRight = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  &::first-letter {
    font-size: 4.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  
  &::first-letter {
    font-weight: bold;
  }
`;

export const GhostButton = styled.button`
  border-radius: 20px;
  background-color: transparent;
  border-color: #ffffff;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const MobileToggle = styled(GhostButton)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    right: -140px;
    top: 40%;
    transform: translateY(-50%) rotate(90deg);
    transform-origin: left center;
    background-color: #343434;
    color: #ffbf00;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 101;
    text-orientation: mixed;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    border-radius: 0 0 20px 20px;

    &:active {
      transform: translateY(-50%) rotate(90deg); /* Mantiene la rotazione */
    }

    & span {
      transform: rotate(-90deg);
      writing-mode: vertical-rl; /* Scrittura verticale da destra a sinistra */
      text-orientation: upright; /* Orienta ogni carattere in verticale */
    }
  }
`;