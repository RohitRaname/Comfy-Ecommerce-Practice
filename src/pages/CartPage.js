import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length === 0)
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h4>Cart is empty</h4>
          <Link to="/products" className="btn">
            Fill it
          </Link>
        </div>
      </Wrapper>
    );

  return (
    <Wrapper>
      <PageHero title="cart" />
      <CartContent />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h4 {
      margin-bottom: 2rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
