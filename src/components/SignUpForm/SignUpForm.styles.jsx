import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 42rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0 3rem;
    background-color: #eeeeee;
    text-align: center;
    align-content: center;
    justify-content: center;

    @media (max-width: 768px) {
        background-color: transparent;
    }

    h1 {
        color: #0f6bc1;
        letter-spacing: -0.2rem;
        margin-top: 2%;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        
        &::first-letter {
            font-size: 4rem;
        }
    }

    span {
        font-size: 1.6rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        color: #575757;
    }
`