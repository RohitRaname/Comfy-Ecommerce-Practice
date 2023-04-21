import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { useAuth0 } from "@auth0/auth0-react";

const CartButtons = () => {
  const { total_items, clearCart } = useCartContext();
  const { closeSidebar } = useProductsContext();
  const { user, loginWithRedirect, logout } = useAuth0();

  return (
    <Wrapper>
      <div className="cart-btn-wrapper">
        <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
          <h4>Cart</h4>
          <FaShoppingCart />
          <p className="cart-value">{total_items}</p>
        </Link>

        <div
          className="auth-btn"
          onClick={
            user
              ? () => {
                  logout();
                  clearCart();
                }
              : loginWithRedirect
          }
        >
          <h4>{user ? "Logout" : "Login"}</h4>
          {user ? <FaUserMinus /> : <FaUserPlus />}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cart-btn-wrapper {
    display: flex;
    gap: 3rem;
  }

  h4 {
    font-weight: 500;
    margin-bottom: 0;
    font-size: 2.2rem;
  }

  svg {
    font-size: 2.2rem;
    color: var(--clr-black);
  }

  .cart-btn,
  .auth-btn {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .cart-btn {
    position: relative;
  }

  .cart-value {
    height: 2.2rem;
    width: 2.2rem;
    display: block;
    border-radius: 50%;
    color: var(--clr-white);
    background: var(--clr-primary-5);
    font-size: 1.15rem;
    position: absolute;
    top: -0.8rem;
    right: -1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .auth-btn {
    cursor: pointer;
  }
`;
export default CartButtons;
