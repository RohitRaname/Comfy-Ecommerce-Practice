import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section section-center">
      <div className="hero">
        <div className="info">
          <h1>
            <span>Design Your</span>
            <br />
            <span>Comfort Zone</span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatum, natus quod tempora impedit quidem, blanditiis rem ab
            laboriosam facere iure exercitationem provident. Dicta quis,
            laboriosam rerum totam vel assumenda saepe?
          </p>

          <Link to="/products" className="btn hero-btn">Shop now</Link>
        </div>
        <div className="img-container">
          <img src={heroBcg2} alt="" className="img" />
          <img src={heroBcg} className="main-img img" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 90vh;
  display: grid;
  align-items: center;

  .hero {
    gap: 6.4rem;
    min-height: 60vh;
    display: grid;
    grid-template-columns: 4fr 6fr;
    align-items: center;
  }

  .img-container {
    width: 100%;
    height: 100%;
  }

  h1 {
    line-height: 1.2;
  }

  p {
    font-size: 2rem;
    line-height: 2;
    margin-bottom: 4rem;
  }

  img {
    width: 100%;
  }

  .hero-btn {
    font-size: 1.7rem;
    padding: 1.2rem 2.4rem;
  }

  .img-container {
    position: relative;
  }

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 25rem;
    width: 30rem;
    z-index: 2;
  }

  .main-img {
    height: 100%;
    left: 10%;
    width: 100%;
    z-index: 1;
  }

  @media screen and (max-width: 998px) {
    .hero {
      grid-template-columns: 1fr;
    }
    .img-container {
      display: none;
    }
  }
`;

export default Hero;
