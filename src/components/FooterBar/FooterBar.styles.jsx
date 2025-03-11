import styled from 'styled-components';

export const Container = styled.div`
  height: 5rem;
  background-color: ${({ $isAuthPage }) => $isAuthPage ? 'white' : '#333'};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4.2rem;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 100;

  @media screen and (max-width: 768px) {
    height: 10rem;
    flex-direction: column;
    margin-top: 1rem;
    padding-top: 1rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ $isAuthPage }) => $isAuthPage ? 'black' : 'white'};
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ $isAuthPage }) => $isAuthPage ? 'black' : 'white'};

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled.a`
  font-size: 1.2rem;

  &:hover {
    opacity: 0.8;
  }
`;