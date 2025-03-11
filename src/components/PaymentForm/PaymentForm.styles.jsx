import styled from "styled-components";
import Button from '../Button/Button.component';

export const PaymentFormContainer = styled.div`
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    height: 10rem;
    min-width: 30rem;
    
    & p {
        color: red;
    }
`

export const PaymentButton = styled(Button)`
    margin-left: auto; // Tutto a destra
    margin-top:  3rem;
`