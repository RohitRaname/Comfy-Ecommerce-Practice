import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const { user } = useAuth0();
  const { openSidebar } = useProductsContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <img src={logo} alt="" className="logo" />

        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;

            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}

          {user && (
            <li key="checkout">
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>

        <FaBars className="toggle-sidebar" onClick={openSidebar} />
        <CartButtons />
      </div>
    </Wrapper>
  );
};

// navbar and footer have fixed height

const Wrapper = styled.nav`
  .logo {
    height: 5.5rem;
    display: block;
  }

  .nav-center {
    height: 8rem;
    width: 120rem;
    max-width: 95vw;
    margin: 0 auto;

    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    display: flex;
    text-transform: capitalize;
    justify-content: center;
    gap: 2rem;

    li {
      position: relative;
      padding: 0 1rem;
      text-align: center;
      border-bottom: 0.16rem solid transparent;
      transition: all 0.15s;

      &:hover {
        border-color: var(--clr-primary-5);
      }
    }

    a {
      display: inline-block;
      color: var(--clr-grey-5);
      font-size: 1.7rem;

      &:hover {
      }
    }
  }

  .toggle-sidebar {
    color: var(--clr-primary-5);
    font-size: 3.3rem;
    display: none;
    margin-left: auto;
    margin-right: 2rem;
  }

  @media screen and (max-width: 998px) {
    .nav-center {
      justify-content: space-between;
    }

    .nav-links,
    .cart-btn-wrapper {
      display: none;
    }

    .toggle-sidebar {
      display: block;
    }
  }
`;

export default Nav;
