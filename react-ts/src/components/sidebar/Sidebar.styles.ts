import styled from "styled-components";

export const Container = styled.div<{ toggle: boolean }>`
  height: calc(100vh - 80px);
  font-weight: 600;
  width: ${({ toggle }) => (toggle ? "100%" : "0.5rem")};
  position: relative;
  background: cornsilk;
  padding: 1.4rem;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  padding: 0;
  list-style-type: none;
  line-height: 2;
  font-weight: 400;
`;
