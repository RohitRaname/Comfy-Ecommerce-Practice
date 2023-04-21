import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import PageHero from "./PageHero";
import { formatPrice } from "../utils/helpers";

const FeaturedProducts = () => {
  const {
    products,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Wrapper>
      <div className="section section-center">
        <div className="title">
          <h3>Featured Products</h3>
          <div className="underline"></div>
        </div>
        <div className="grid-4 mb-sm">
          {products.slice(0, 3).map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>

        <div className="flex-center">
          <Link className="btn" to="/products">
            Show More
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  img {
    margin-bottom: 1.3rem;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .name {
    font-weight: 400;
  }

  .price {
    color: var(--clr-primary-5);
  }
`;

export default FeaturedProducts;
