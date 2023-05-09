import type { FC } from "react";
import styled from "styled-components";

const Hamburger: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <SVG
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </SVG>
  );
};

export default Hamburger;

const SVG = styled.svg`
  cursor: pointer;
  height: auto;
  width: 2rem;
  position: absolute;
  top: 1rem;
  right: 0.5rem;
`;
