import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { image, name, price, id } = product;
  return (
    <Wrapper>
      <article>
        <header className="img-container">
          <img src={image} className="img" alt="" />
          <Link className="redirect-btn" to={`/product/${id}`}>
            <FaSearch />
          </Link>
        </header>
        <footer className="info">
          <h5 className="name">{name}</h5>
          <p className="price">${formatPrice(price)}</p>
        </footer>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .img-container {
    position: relative;

    img {
      height: 20rem;
      transition: filter 0.5s ease-in-out;
    }

    &:hover {
      img {
        filter: brightness(60%);
      }

      .redirect-btn {
        opacity: 1;
      }
    }
  }

  .redirect-btn {
    position: absolute;
    z-index: 10;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--clr-white);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    font-size: 2rem;
  }

  .info {
    display: flex;
    justify-content: space-between;
    h5{
      font-weight: 400;
    }

    .price{
      color: var(--clr-primary-5);
    }

  }
`;
export default Product;
