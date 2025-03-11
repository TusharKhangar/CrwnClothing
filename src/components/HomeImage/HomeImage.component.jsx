import React from 'react';
import Image from '../../assets/home-image.webp';

import { Container } from './HomeImage.styles.jsx';


const HomeImage = ({children}) => {
  return (
    <Container $backgroundImage={Image}>
      {children}
    </Container>
  )
}

export default HomeImage