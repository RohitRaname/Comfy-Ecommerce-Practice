import React from "react";
import styled from "styled-components";

const Contact = () => {
  

  return (
    <Wrapper className="section section-center ">
      <h3>Join out newsletter and get</h3>
      <div className="content grid-2">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
          recusandae iure necessitatibus totam sed sit accusamus voluptate
          laudantium quia harum deleniti at.
        </p>
        <form className="contact-form">
          <input
            type="email"
            className="form-input"
            name="email"
            placeholder="Enter Email"
          />
          <button className="btn submit-btn">Subscribe</button>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
    margin-bottom: 3rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  .form-input,
  .submit-btn {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }

  .content {
    gap: 8rem;
  }

  @media (max-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  /* @media (min-width: 1280px) {
    padding: 15rem 0;
  } */
`;

export default Contact;
