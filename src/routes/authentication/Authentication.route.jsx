import React, { useState, useRef } from 'react';

import ScrollingBar from '../category/ScrollingBar/ScrollingBar.component.jsx';
import SignInForm from '../../components/SignInForm/SignInForm.component';
import SignUpForm from '../../components/SignUpForm/SignUpForm.component';

import {
  Body,
  Container,
  SignUpContainer,
  SignInContainer,
  OverlayContainer,
  Overlay,
  OverlayLeft,
  OverlayRight,
  Title,
  Paragraph,
  GhostButton,
  MobileToggle,
} from './Authentication.styles.jsx';



const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const containerRef = useRef(null);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <ScrollingBar />
      <Body>
        <Container className={isSignUp ? 'right-panel-active' : ''} ref={containerRef}>
          <SignUpContainer className="sign-up-container">
            <SignUpForm />
          </SignUpContainer>
          <SignInContainer className="sign-in-container">
            <SignInForm />
          </SignInContainer>
          <OverlayContainer className="overlay-container">
            <Overlay className="overlay">
              <OverlayLeft className="overlay-left">
                <Title>Bentornato!</Title>
                <Paragraph>
                  Per restare connesso con noi, effettua il login con i tuoi dati personali
                </Paragraph>
                <GhostButton id="signIn" onClick={toggleForm}>
                  Sign In
                </GhostButton>
              </OverlayLeft>
              <OverlayRight className="overlay-right">
                <Title>Benvenuto!</Title>
                <Paragraph>
                  Per restare connesso con noi, effettua la registrazione con i tuoi dati personali
                </Paragraph>
                <GhostButton id="signUp" onClick={toggleForm}>
                  Sign Up
                </GhostButton>
              </OverlayRight>
            </Overlay>
          </OverlayContainer>
          <MobileToggle className="mobile-toggle" onClick={toggleForm}>
            <span>{isSignUp ? 'Login' : 'SignUp'}</span>
          </MobileToggle>
        </Container>
      </Body>
    </>
  );
};

export default Authentication;

