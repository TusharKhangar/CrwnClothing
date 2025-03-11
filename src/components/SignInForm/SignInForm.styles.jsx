import styled from "styled-components";

export const SignInFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 42rem;
    padding: 30px;
    text-align: center;
    align-content: center;
    justify-content: center;
    background-color: #eeeeee;
    
    h1 {
        color: #0f6bc1;
        letter-spacing: -0.2rem;
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
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
