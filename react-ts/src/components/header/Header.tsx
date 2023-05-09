import type { FC } from "react";
import { Container } from "./Header.styles";

export const Header: FC<{ time: number | null }> = ({ time }) => {
  return (
    <Container>
      {time !== null && `Time left: ${time > 0 ? `${time}s` : "0"}`}{" "}
    </Container>
  );
};
