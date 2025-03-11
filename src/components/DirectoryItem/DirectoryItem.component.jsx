import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  BackgroundImage,
  ExploreSelectionDiv,
  CategoryOverlay, 
  DirectoryItemContainer, 
  Title,
  Explore
} from './DirectoryItem.styles';

function DirectoryItem({ category }) {
  const { id, imageUrl, title, route, gridArea } = category;
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Creiamo il ref per l'elemento su cui applicare l'animazione
  const overlayRef = useRef(null);

  const inView = useInView(containerRef, {
    triggerOnce: true, // Anima solo la prima volta che entra nella vista
    threshold: 0.3, // Percentuale dell'elemento visibile (0.1 significa che il 10% deve essere visibile)
  });

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer
      ref={containerRef}
      id={`directory-item-${id}`} 
      onClick={onNavigateHandler} 
      $gridArea={gridArea}
    >
      <BackgroundImage $imageUrl={imageUrl}/>
      <CategoryOverlay
        ref={overlayRef}
        as={motion.div} 
        initial={{ x: '-50%', y: 100, opacity: 0 }} 
        animate={{
          x: '-50%',
          y: inView ? 0 : 100, // Modifica l'animazione in base alla visibilità
          opacity: inView ? 1 : 0,
        }}
        transition={{ duration: 1.5 }} 
      >
        <Title>{title}</Title>
        <ExploreSelectionDiv>
          <Explore>ESPLORA LA SELEZIONE</Explore>
        </ExploreSelectionDiv>
      </CategoryOverlay>
      
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;

