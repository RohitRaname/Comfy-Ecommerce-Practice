import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="content section section-center">
        <h4>
          <Link to="/">Home</Link>
          <span> / </span>
          {product && (
            <>
              <Link to="/products">Products</Link> <span> / </span>{" "}
              <span>{product}</span>
            </>
          )}
          <span>{!product && title}</span>
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);

  a {
    color: var(--clr-primary-3);
  }
  span {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
