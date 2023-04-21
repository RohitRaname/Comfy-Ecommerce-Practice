import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

let initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
};

const getLocalStorage = () =>
  localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const setLocalStorage = (cart) =>
  localStorage.setItem("cart", JSON.stringify(cart));

const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => dispatch({ type: ADD_TO_CART, payload: item });

  const removeItem = (id) => dispatch({ type: REMOVE_CART_ITEM, payload: {id} });

  const updateCartItemAmount = (id, amount) =>
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, amount } });

  const clearCart = () => dispatch({ type: CLEAR_CART });

  const calculateTotals = () => dispatch({ type: COUNT_CART_TOTALS });





  useEffect(() => {
    initialState.cart = getLocalStorage();
  }, []);

  useEffect(() => {
    calculateTotals();
    setLocalStorage(state.cart);
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        updateCartItemAmount,
        clearCart,
        calculateTotals,
     
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
