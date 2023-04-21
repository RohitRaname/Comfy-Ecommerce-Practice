import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((prd) => (
          <Product product={prd} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .products-container {
    display: grid;
    gap: 2rem;

    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

    @media screen and (max-width: 44em) {
      grid-template-columns: 1fr;
    }
  }
`;

export default GridView;
