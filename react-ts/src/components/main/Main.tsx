import type { FC } from "react";
import { Container } from "./Main.styles";

export const Main: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <button>Countdown</button>
    </Container>
  );
};
