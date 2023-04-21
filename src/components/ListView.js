import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const ListView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((prd) => {
          const { image, name, description, id, price } = prd;
          return (
            <article>
              <img src={image} alt={name} />
              <footer>
                <h4>{name}</h4>
                <p className="price">${formatPrice(price)}</p>
                <p>{description.slice(0,150)}...</p>

                <Link to={`/product/${id}`} className="btn" on>
                  Details
                </Link>
              </footer>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .products-container {
    display: grid;
    row-gap: 4rem;
  }

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 250px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 1.3rem;
    padding: 0.25rem 1rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
