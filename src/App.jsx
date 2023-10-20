import { createRoot } from "react-dom/client";
import SeachParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Buy a house!</h1>
      <SeachParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
