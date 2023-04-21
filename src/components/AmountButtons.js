import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <Wrapper>
      <div className="amount-btns">
        <button className="amount-btn" onClick={decrease}>
          <FaMinus />{" "}
        </button>
        <h2 className="amount">{amount}</h2>
        <button className="amount-btn" onClick={increase}>
          <FaPlus />{" "}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .amount-btns {
    max-width: 14rem;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    align-items: center;
  }
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;
