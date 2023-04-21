import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

// need to create new reference every fucking time
const cart_reducer = (state, action) => {
  // crud operation done in reducer
  const { type, payload } = action;

  if (type === ADD_TO_CART) {
    const { id, color, amount } = payload;
    const cartItemId = id + color;

    // 1.check item already exist
    const item = state.cart.find((cartItem) => cartItem.id === cartItemId);

    // if item exist
    if (item) {
      // then check amount greater than maxStock
      const isAmountGreaterThanMaxStock = item.amount + amount > item.stock;

      const newAmount = isAmountGreaterThanMaxStock
        ? item.stock
        : item.amount + amount;
      const cart = state.cart.map((cartItem) => {
        if (cartItem.id === cartItemId)
          return { ...cartItem, amount: newAmount };
        return cartItem;
      });

      return { ...state, cart };
    }

    const newCartItem = { ...payload, id: cartItemId };

    // if doesnot exist add item simple to cart using unique id(id+color)
    return { ...state, cart: [...state.cart, newCartItem] };
  }

  if (type === CLEAR_CART) return { ...state, cart: [] };

  if (type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (acc, item) => {
        acc.total_items = acc.total_items + item.amount;
        acc.total_amount = acc.total_amount + item.amount * item.price;
        return acc;
      },
      { total_amount: 0, total_items: 0 }
    );

    return { ...state, total_items, total_amount };
  }

  if (type === REMOVE_CART_ITEM) {
    console.log("cartId", payload.id);

    const newCart = state.cart.filter((item) => item.id !== payload.id);
    return { ...state, cart: newCart };
  }

  if (TOGGLE_CART_ITEM_AMOUNT) {
    const { id, amount } = payload;
    const cartItem = state.cart.find((c) => c.id === id);
    const { stock } = cartItem;
    let newAmount = amount;
    if (amount > stock) newAmount = stock;
    if (amount <= 1) newAmount = 1;
    const newCart = state.cart.map((item) => {
      if (item.id === id) return { ...item, amount: newAmount };
      return item;
    });
    return { ...state, cart: newCart };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
