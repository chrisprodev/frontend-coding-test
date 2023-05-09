import type { FC } from "react";
import { useEffect, useState } from "react";
import { Container } from "./AppContainer.styles";
import Sidebar from "../sidebar";
import Header from "../header";
import Main from "../main";

export const AppContainer: FC = () => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  const startCountdown = () => {
    setTimeLeft(15);
  };

  useEffect(() => {
    let countdown: NodeJS.Timer;

    if (timeLeft !== null) {
      countdown = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(countdown);
          setTimeLeft(null);
        } else {
          setTimeLeft(timeLeft - 1);
        }
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [timeLeft]);

  return (
    <>
      <Header time={timeLeft} />
      <Container>
        <Sidebar />
        <Main onClick={startCountdown} />
      </Container>
    </>
  );
};
