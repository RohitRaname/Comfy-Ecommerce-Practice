import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
const CartItem = ({ id, images, name, color, price, amount }) => {
  const { removeItem, updateCartItemAmount } = useCartContext();

  const increase = () => updateCartItemAmount(id, amount + 1);
  const decrease = () => updateCartItemAmount(id, amount - 1);


  return (
    <Wrapper>
      <div className="info">
        <img src={images[0].url} className="img" alt="" />
        <div className="detail">
          <h5 className="mb-0">{name}</h5>
          <p className="color">
            <span> Color :</span>{" "}
            <span
              className="color-btn"
              style={{ backgroundColor: color }}
            ></span>
          </p>
          <p className="small-price color-p">${formatPrice(price)}</p>
        </div>
      </div>
      <p className="price color-p">${formatPrice(price)}</p>

      <AmountButtons amount={amount} increase={increase} decrease={decrease} />

      <p className="subtotal">${formatPrice(amount * price)}</p>

      <button className="btn remove-btn" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 25rem 1fr 1fr 1fr auto;
  align-items: center;
  justify-items: center;
  margin-bottom: 3rem;

  .info {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-items: flex-start;
    gap: 1.5rem;
    font-size: 1.4rem;
    justify-self: start;

    h6,
    p {
      margin-bottom: 0;
    }

    img {
      height: 7rem;
      width: 11rem;
      border-radius: 5px;
      justify-self: start;
    }

    .small-price {
      display: none;
    }

    .color {
      color: var(--clr-grey-5);
      display: flex;
      align-items: baseline;

      &-btn {
        height: 1rem;
        margin-left: 0.5rem;
        width: 1rem;
        display: inline-block;
        border-radius: var(--radius);
      }
    }
  }

  .price,
  .subtotal {
    display: inline-block;
    width: 10rem;
    font-size: 1.8rem;
  }

  .subtotal {
    color: var(--clr-grey-5);
  }

  .amount-btns {
    gap: 1.5rem;
    .amount {
      font-size: 2.4rem;
    }
  }

  .remove-btn {
    font-size: 1.3rem;
    background: var(--clr-red-dark);
    padding: 0.3rem;

    &:hover {
      color: var(--clr-white);
    }
  }

  @media screen and (max-width: 777px) {
    grid-template-columns: 25rem 1fr 1fr;

    .price,
    .subtotal {
      display: none;
    }

    .info .small-price {
      display: block;
    }
  }
`;

export default CartItem;
