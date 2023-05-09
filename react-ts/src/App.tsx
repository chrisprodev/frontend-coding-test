import { memo } from "react";
import GlobalStyles from "./globalStyles";
import AppContainer from "./components/appContainer";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer />
    </>
  );
}

export default memo(App);
