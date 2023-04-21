import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import Product from "./Product";
import styled from "styled-components";
import Error from "./Error";

const ProductList = () => {
  const { filtered_products, grid_view } = useFilterContext();

  if (filtered_products.length === 0)
    return <Error title="no products found" />;

  return (
    <Wrapper>
      <div className="products-center">
        {grid_view ? (
          <GridView products={filtered_products} />
        ) : (
          <ListView products={filtered_products} />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ProductList;
