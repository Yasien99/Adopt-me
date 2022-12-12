import { render } from "react-dom";
import { StrictMode } from "react"
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <StrictMode>
      <h1 className="title">Adopt Me!</h1>
      <SearchParams  name="Luna" animal="dog" breed="Havanese" />
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));