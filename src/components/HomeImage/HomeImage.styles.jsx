import styled from 'styled-components';

export const Container = styled.div`
    background-image: url(${props => props.$backgroundImage});
    width: calc(100vw - 17px); // - scrollbar
    height: 150vh;
    padding-top: 2rem;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: 480px) {
        width: 100vw;
        background-position: 40% center;
    }
`