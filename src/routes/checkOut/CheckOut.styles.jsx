import styled from "styled-components";

export const CheckOutContainer = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #333;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    padding: 1rem;
  }
`;

export const CheckOutHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 2rem;

  @media screen and (max-width: 876px) {
    display: none;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  color: #666;
  font-weight: bold;
`;

export const CartItemsContainer = styled.div`
  margin-bottom: 2rem;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 2px solid #e0e0e0;

  span:last-child {
    color: #4a4a4a;
  }
`;

export const PaymentContainer = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #e0e0e0;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }
`;