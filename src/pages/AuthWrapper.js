import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const AuthWrapper = ({ children }) => {
  const { error, isLoading } = useAuth0();

  console.log(useAuth0());

  if (isLoading)
    return (
      <Wrapper>
        <h2>Loading...</h2>
      </Wrapper>
    );
  if (error)
    return (
      <Wrapper>
        <h2>Error occured! Try again.</h2>
      </Wrapper>
    );

  console.log(process.env);

  return children;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
