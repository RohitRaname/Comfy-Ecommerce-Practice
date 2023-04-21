import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";
import { useProductsContext } from "../context/products_context";

const ProductsPage = () => {

  return (
    <Wrapper>
      <PageHero title="Products" />

      <section className="section section-center products">
        <Filters />
        <div>
          <Sort />
          <ProductList  />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
