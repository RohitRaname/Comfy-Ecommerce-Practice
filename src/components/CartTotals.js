import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const CartTotals = () => {
  const { total_items, total_amount } = useCartContext();
  const { user, loginWithRedirect } = useAuth0();

  const totalPrice = total_amount;
  const finalPrice = totalPrice + 500;

  return (
    <Wrapper>
      <article>
        <h5>
          Subtotal : <span>${formatPrice(totalPrice)}</span>
        </h5>
        <p>
          shipping fee :<span>$5.34</span>{" "}
        </p>

        <hr />
        <h4>
          Order Total : <span>{formatPrice(finalPrice)}</span>
        </h4>
      </article>

      {user ? (
        <Link to="/checkout" className="btn">
          Checkout
        </Link>
      ) : (
        <button className="btn" onClick={loginWithRedirect}>
          Login
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  justify-content: end;

  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (max-width: 776px) {
    justify-content: center;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
