import { createRoot } from "react-dom";
import House from "./House";

const App = () => {
  <div>
    <h1>Buy a house!</h1>
    <House name="apartment" bed="two" bath="two" />
    <House name="house" bed="three" bath="two" />
    <House name="bath house" bed="five" bath="three" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
