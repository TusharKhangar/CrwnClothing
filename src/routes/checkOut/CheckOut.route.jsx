import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector.js';
import CheckOutItem from '../../components/CheckOutItem/CheckOutItem.component.jsx';
import PaymentForm from '../../components/PaymentForm/PaymentForm.component.jsx';
import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
  CartItemsContainer,
  TotalContainer,
  PaymentContainer
} from './CheckOut.styles.jsx';

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  
  return (
    <CheckOutContainer>
      <h1>Il tuo carrello</h1>
      <CheckOutHeader>
        <HeaderBlock>Prodotto</HeaderBlock>
        <HeaderBlock>Descrizione</HeaderBlock>
        <HeaderBlock>Quantità</HeaderBlock>
        <HeaderBlock>Prezzo</HeaderBlock>
        <HeaderBlock>Rimuovi</HeaderBlock>
      </CheckOutHeader>
      <CartItemsContainer>
        {cartItems.map((cartItem) => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CartItemsContainer>
      <TotalContainer>
        <span>Totale</span>
        <span>$ {cartTotal.toFixed(2)}</span>
      </TotalContainer>
      <PaymentContainer>
        <h2>Metodo di pagamento</h2>
        <PaymentForm />
      </PaymentContainer>
    </CheckOutContainer>  
  )
}

export default CheckOut;