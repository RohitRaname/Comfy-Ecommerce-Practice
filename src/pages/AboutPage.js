import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <Wrapper className="page">
      <PageHero title="about" />

      <section className="about section section-center">
        <img src={aboutImg} className="img" alt="" />
        <div className="content">
          <div className="title">
            <h3>Our Story</h3>
            <div className="underline"></div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            eaque id optio, quod, consequatur harum eius est asperiores
            similique corrupti expedita repudiandae illo omnis maxime debitis.
            Quia et, dolorum ut blanditiis neque repellendus error voluptate.
            Quae exercitationem adipisci autem, natus quibusdam ipsum sed
            tempora, quisquam tenetur voluptatum rerum. Hic quidem doloremque
            incidunt excepturi voluptates quisquam temporibus consectetur minus
            natus et adipisci magna.
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .about {
    display: grid;
    grid-template-columns: 50rem 1fr;
    gap: 5rem;
  }

  img {
    height: 53rem;
  }

  .content {
  }

  p {
    color: var(--clr-grey-5);
    overflow-wrap: break-word;
  }

  .title {
    display: inline-block;
    .underline {
      margin-left: 0;
    }
  }



  @media screen and (max-width:59em) {
      .about{
        grid-template-columns: 1fr;
      }
  }
`;
export default AboutPage;
