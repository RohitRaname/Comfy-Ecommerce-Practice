import React, { useState } from "react";
import { BsEmojiKiss } from "react-icons/bs";
import styled from "styled-components";

const ProductImages = ({ images = [{ img: null }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <img className="main-img img" src={main.url} alt={main.filename} />

      <div className="images">
        {images.map((el) => (
          <img
            src={el.url}
            key={el.id}
            alt={el.filename}
            className={main===el?"img active":"img"}

            onClick={()=>setMain(el)}

          />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    border-radius: var(--radius);
  }
  .main-img {
    height: 54rem;
    margin-bottom: 1rem;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    img {
      height: 7rem;
      border: 1px solid transparent;
      cursor: pointer;
    }
    .active {
      border: 2px solid var(--clr-primary-5);
    }
  }
`;

export default ProductImages;
