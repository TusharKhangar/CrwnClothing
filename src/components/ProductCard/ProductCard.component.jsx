import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { addItemToCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

import Button, {BUTTON_TYPE_CLASSES} from '../Button/Button.component.jsx';

import { Image, ProductCardContainer, Footer} from './ProductCard.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl} = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    toast.success(`🛒 ${name} added to cart`);
  }

  return (
    <ProductCardContainer>
        <Image src={imageUrl} alt={`${name}`} />
        <Footer>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.product} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;