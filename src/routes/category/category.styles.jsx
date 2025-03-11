import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat( 4, 1fr);
    column-gap: 2rem;
    row-gap: 5rem;
    padding: 0 2.5rem;
    margin-bottom: 4rem;
    margin-top: 4.5rem;

    @media screen and (max-width: 1050px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 584px) {
        grid-template-columns: 1fr;
    }
`

export const CategoryImage = styled.div`
    width: 100%;
    height: 600px;
    background-image: ${({$categoryImage}) => `url(${ $categoryImage })`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;    
`

export const CategoryTitle = styled.h2`
    font-size: 7rem;
    margin: 2rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 100;
`
