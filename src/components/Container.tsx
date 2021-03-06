import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  max-width: 1160px;
  width: 90%;
  margin: auto;
  @media screen and (max-width: 425px) {
    width: 95%;
  }
`;

const Container = ({ children }: any) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
