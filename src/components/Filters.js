import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    all_products,
    updateFilters,
    clearFilters,
    filters: { text, category, company, color, price, max_price, shipping },
  } = useFilterContext();

  const categories = ["all", ...new Set(all_products.map((el) => el.category))];
  const companies = ["all", ...new Set(all_products.map((el) => el.company))];
  const colors = [
    "all",
    ...new Set(all_products.map((el) => el.colors).flat()),
  ];

  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            name="text"
            value={text}
            onChange={updateFilters}
          />
        </div>

        <div className="form-control">
          <h5>Category</h5>

          {categories.map((c, index) => (
            <button
              key={index}
              name="category"
              value={c}
              className={`${c === category ? "active company" : "company"}`}
              onClick={updateFilters}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="form-control">
          <h5>Company</h5>
          <select name="company" value={company} onChange={updateFilters} id="">
            {companies.map((c, index) => (
              <option
                key={index}
                value={c}
                className={`${c === company ? "active company" : "company"}}`}
                name="company"
              >
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control ">
          <h5>Colors</h5>
          <div name="" id="" className="colors">
            {colors.map((c, index) => {
              if (c === "all")
                return (
                  <button
                    key={index}
                    name="color"
                    value="all"
                    onClick={updateFilters}
                    style={{ marginRight: "1rem" }}
                    className={c === "all" ? "active" : ""}
                  >
                    All
                  </button>
                );

              return (
                <button
                  key={index}
                  className="color-btn"
                  name="color"
                  value={c}
                  onClick={updateFilters}
                  style={{ backgroundColor: c }}
                >
                  {c === color && <FaCheck />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="form-control">
          <h5>Price</h5>
          <p className="price">${formatPrice(price)}</p>

          <input
            type="range"
            name="price"
            value={price}
            onChange={updateFilters}
            min={0}
            max={max_price}
          />
        </div>
        <div className="form-control shipping">
          <label htmlFor="shipping">Shipping</label>
          <input
            id="shipping"
            type="radio"
            name="shipping"
            checked={shipping}
            onChange={updateFilters}
          />
        </div>

        <button onClick={clearFilters} className="clear-btn">
          Clear Filters
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .company {
    /* background: var(--clr-grey-10); */
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }

  /* .active class is quite good  */

  .active {
    border-color: var(--clr-grey-5);
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
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
      font-size: 1rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;

    label {
      font-size: 1.6rem;
    }

    input {
    }
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
