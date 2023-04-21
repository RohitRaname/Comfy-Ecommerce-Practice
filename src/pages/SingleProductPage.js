import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const {
    single_product: product,
    single_product_error: error,
    single_product_loading: loading,
    getSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    getSingleProduct(`${url}${id}`);
  }, [id]);

  if (loading) return <Loading />;
  if (error || !product) return <Error title="Product not found" />;

  const {
    colors,
    company,
    description,
    images,
    name,
    price,
    reviews,
    stars,
    stock,
  } = product;

  return (
    <Wrapper>
      <PageHero title="Products" product={name} />

      <section className="section section-center page">
        <Link className="btn mb-md" to="/products">
          Back to Products
        </Link>

        {/* nav-center product-center */}
        <div className="product-center">
          <ProductImages images={images} />
          <div className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h4 className="price color-p">${formatPrice(price)}</h4>
            <p className="desc">{description}</p>

            <div className="info mb-sm">
              <span>Available :</span>
              {stock ? "In Stock" : "Out Of Stock"}
            </div>
            <div className="info mb-sm">
              <span>SKU :</span>
              {id}
            </div>
            <div className="info mb-sm">
              <span>Brand :</span>
              {company}
            </div>
            <hr />

            {/* addTocart =>  colors btn and qty setter  */}
            {stock > 0 && <AddToCart product={product} />}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap-bg);
  }

  .info {
    display: grid;
    grid-template-columns: 12rem 1fr;

    span {
      font-weight: 700;
    }
  }
`;

export default SingleProductPage;
