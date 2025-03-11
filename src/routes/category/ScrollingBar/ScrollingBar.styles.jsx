import styled from "styled-components";

export const Container = styled.div`
    background-color: #d1d1d1;
    color: #121212;
    overflow: hidden;
    height: 6.5rem;
    position: relative;

    @media (max-width: 768px) {
        height: 32px;
    }
`;

export const Body = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const ScrollItem = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration: underline;
    text-underline-offset: 4px; /* Distanza della sottolineatura dal testo */
    letter-spacing: 0.05em;
    text-transform: uppercase;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transform: translateY(100%);
    transition: opacity 0.5s ease, transform 0.5s ease;

    &.active {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;