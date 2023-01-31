import React from "react";
import Div from "./Components/Div";
import Img from "./Components/Img";
import P from "./Components/P";
import H3 from "./Components/H3";

const KeysToComponentMap = {
  div: Div,
  img: Img,
  p: P,
  h3: H3,
};

function ComponentMaker(config) {
  if (typeof KeysToComponentMap[config.component] !== "undefined") {
    return React.createElement(
      KeysToComponentMap[config.component],
      {
        src: config.src ? config.src : null,
        className: config.className
       
      },
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : config.children.map((c) => ComponentMaker(c)))
    );
  }
}

export default ComponentMaker;
