import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="section section-center">
        <header className="grid-2">
          <h3>
            <span>
              Custom Furtinure <br /> <span>Build Only For You</span>{" "}
            </span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            neque, natus officia officiis, ut esse illum voluptatibus quia,
            voluptates fugiat labore distinctio nisi eveniet quibusdam.
          </p>
        </header>

        <footer className="services grid-4">
          {services.map((service) => {
            const { id, icon, title } = service;
            return (
              <article key={id} className="service">
                <div className="icon flex-center">{icon}</div>
                <h4>{title}</h4>
              </article>
            );
          })}
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);

  h3,
  h4 {
    color: var(--clr-primary-1);
  }

  p {
    color: var(--clr-primary-3);
  }

  header {
    margin-bottom: 6rem;
  }

  .service {
    background: var(--clr-primary-7);
    padding: 3.5rem;
    border-radius: var(--radius);
    display: grid;
    justify-content: center;

    .icon {
      font-size: 3.3rem;
      color: var(--clr-primary-1);
      height: 7rem;
      width: 7rem;
      border-radius: 50%;
      background: var(--clr-primary-10);
      margin-bottom: 2rem;
    }
  }
`;
export default Services;
