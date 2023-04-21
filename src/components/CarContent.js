import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className="section section-center">
      <CartColumns />

      <ul className="cart-items mb-md">
        {cart.map((item) => (
          <CartItem {...item} />
        ))}
      </ul>
      <hr className="mb-sm" />

      <div className="link-container mb-md">
        <Link to="/products" className="btn link-btn">
          Continue Shopping
        </Link>
        <button className="btn clear-btn link-btn" onClick={clearCart}>
          Clear Shopping Cart
        </button>
      </div>

      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: .6rem 1.2rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default CartContent;
