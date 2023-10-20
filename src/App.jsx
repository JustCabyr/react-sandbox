import React from "react";
import { createRoot } from "react-dom";

const House = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.type),
    React.createElement("h2", {}, props.bed),
    React.createElement("h2", {}, props.bath),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Buy a house!"),
    React.createElement(House, {
      type: "apartment",
      bed: "two",
      bath: "two",
    }),
    React.createElement(House, {
      type: "house",
      bed: "three",
      bath: "two",
    }),
    React.createElement(House, {
      type: "apartment",
      bed: "five",
      bath: "three",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
