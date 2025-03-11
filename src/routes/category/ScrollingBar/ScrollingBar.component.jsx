import React, { useState, useEffect } from 'react';

import {
  Container,
  Body,
  ScrollItem,
} from './ScrollingBar.styles.jsx';

const ScrollingBar = () => {
  const messages = [
    "SPEDIZIONE GRATUITA SU TUTTI GLI ORDINI",
    "RESI GRATUITI ENTRO 30 GIORNI",
    "CONFEZIONE REGALO GRATUITA"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container role="marquee">
      <Body className="scrolling-bar-container">
        {messages.map((message, index) => (
          <ScrollItem
            key={index}
            className={`scrolling-bar-item ${index === activeIndex ? 'active' : ''}`}
            aria-hidden={index !== activeIndex}
          >
            {message}
          </ScrollItem>
        ))}
      </Body>
    </Container>
  );
};

export default ScrollingBar;
