import React from 'react';

import { BaseButton, 
  GoogleSignInButton, 
  InvertedButton,
  ProductButton,
  ButtonSpinner
} from './Button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
  product: 'product',
}

const getButton = (buttonType= BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.product]: ProductButton,
  }[buttonType]
);

// Props: children, qualsiasi tag o testo, tipo di bottone ed eventuali altre props
const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  // Disabilita il pulsante mentre sta caricando la transazione
  return (
    <CustomButton disabled={isLoading} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
}


export default Button;