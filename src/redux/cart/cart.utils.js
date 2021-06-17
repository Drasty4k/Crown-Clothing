export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCarItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCarItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
  const existingCarItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToRemove.id
  );

  if (existingCarItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemsToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemsToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
