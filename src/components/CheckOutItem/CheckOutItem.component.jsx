import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import { 
  Container, 
  Image, 
  Name, 
  Quantity, 
  Price, 
  Arrow, 
  Value, 
  RemoveIcon
} from './CheckOutItem.styles';

const CheckOutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <Container>
        <Image $imageUrl={imageUrl} />
        <Name> {name} </Name>
        <Quantity>
            <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </Quantity>
        <Price>$ {price}</Price>
        <RemoveIcon onClick={clearItemHandler}>&#10005;</RemoveIcon>
    </Container>
  )
}

export default CheckOutItem;