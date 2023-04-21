import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { colors, stock } = product;

  const { addToCart } = useCartContext();

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () =>
    setAmount((oldAmount) =>
      oldAmount + 1 > stock ? oldAmount : oldAmount + 1
    );
  const decrease = () =>
    setAmount((oldAmount) => (oldAmount - 1 < 1 ? oldAmount : oldAmount - 1));

  return (
    <Wrapper>
      <div className="colors">
        <span>Colors:</span>
        <div>
          {colors.map((color) => (
            <button
              key={color.id}
              className="color-btn"
              onClick={() => setMainColor(color)}
              style={{ backgroundColor: color }}
            >
              {color === mainColor ? <FaCheck /> : ""}
            </button>
          ))}
        </div>
      </div>

      <AmountButtons amount={amount} increase={increase} decrease={decrease} />

      <Link
        className="btn"
        onClick={() => addToCart({ ...product, amount, color: mainColor })}
        to="/cart"
      >
        add to cart
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 12rem 1fr;
    align-items: center;
    margin-bottom: 2rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 1.1rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
