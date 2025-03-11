import React from "react";

import { Container,
  Logo,
  NavLinks,
  Link,
  SocialIcons,
  Icon
} from './FooterBar.styles';

const FooterBar = ({ isAuthPage }) => {
  return (
    
    <Container $isAuthPage={isAuthPage}>
      <Logo $isAuthPage={isAuthPage}>Crwn Shop</Logo>
      <NavLinks>
        <Link $isAuthPage={isAuthPage} href="/about">About</Link>
        <Link $isAuthPage={isAuthPage} href="/contact">Contact</Link>
        <Link $isAuthPage={isAuthPage} href="/terms">Terms</Link>
        <Link $isAuthPage={isAuthPage} href="/privacy">Privacy</Link>
      </NavLinks>
      <SocialIcons>
        <Icon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img 
            src={`https://icongr.am/fontawesome/facebook-official.svg?size=32&color=${isAuthPage ? 'currentColor' : 'ffffff'}`} 
            alt="icon Facebook" 
          />
        </Icon>
        <Icon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img 
          src={`https://icongr.am/fontawesome/whatsapp.svg?size=32&color=${isAuthPage ? 'currentColor' : 'ffffff'}`} 
          alt="icon WhatsApp" 
        />

        </Icon>
        <Icon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={`https://icongr.am/fontawesome/instagram.svg?size=32&color=${isAuthPage ? 'currentColor' : 'ffffff'}`} 
            alt="icon Facebook" 
          />
        </Icon>
      </SocialIcons>
    </Container>
  );
};

export default FooterBar;