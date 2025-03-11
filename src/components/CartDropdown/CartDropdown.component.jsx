import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action';

import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component.jsx';

import { 
  CartDropdownContainer, 
  CartItemsContainer, 
  EmptyMessage  
} from './CartDropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  // Chiude il carrello al click sul pulsante checkout
  const goToCheckOutHandler = () => {
    navigate('/checkout');
    if (isCartOpen) toogleIsCartOpen(); 
  };

  return (
    <CartDropdownContainer>
        <CartItemsContainer>
          { cartItems.length ? (
            cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Il tuo carrello è vuoto</EmptyMessage>
          )}
        </CartItemsContainer>
        <Button onClick={goToCheckOutHandler}>Check out</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;