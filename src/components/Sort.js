import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
const Sort = () => {
  const { all_products, updateSort, grid_view, setGridView, setListView } =
    useFilterContext();

  return (
    <Wrapper className="mb-sm">
      <div className="btn-container ">
        <button
          className={grid_view ? "btn active" : "btn"}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          className={!grid_view ? "btn active" : "btn"}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>

      <span>{all_products.length} Products Found</span>
      <hr />

      <form className="sort">
        <span>Sort By</span>
        <select name="sort" onChange={updateSort}>
          <option value="lowest-price">Price(Lowest)</option>
          <option value="highest-price">Price(Highest)</option>
          <option value="a-z">Name(A-Z)</option>
          <option value="z-a">Name(Z-A)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  gap: 2rem;
  align-items: center;

  .btn-container {
    button {
      background: var(--clr-white);
      color: var(--clr-black);
      box-shadow: none;
      padding: 0;
      margin-right: 0.4rem;
    }

    svg {
      border: 1px solid var(--clr-black);
      border-radius: var(--radius);
      font-size: 2.3rem;
      padding: 0.2rem;
    }

    .active svg {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort {
    display: flex;
    align-items: start;
    gap: 2rem;
  }

  form select {
    outline: none;
    border: none;
    font-size: 1.8rem;

    &:focus {
      border: 1px solid var(--clr-primary-5);
    }
  }
`;

export default Sort;
