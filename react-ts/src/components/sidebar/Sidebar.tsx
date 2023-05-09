import type { FC } from "react";
import { useState } from "react";
import { Container, Menu } from "./Sidebar.styles";
import HamburgerIcon from "../icons/Hamburger.icon";

export const Sidebar: FC = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <Container toggle={showMenu}>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <>
          Sidebar Menu
          <Menu>
            {[1, 2, 3, 4].map((e: any, i: number) => (
              <li key={e}>Feature #{i + 1}</li>
            ))}
          </Menu>
        </>
      )}
    </Container>
  );
};
