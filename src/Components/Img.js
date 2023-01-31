import React from "react";

const Img = ({ className, src, children, style, id }) => {
  return <img className={className} src={src} style={style} id={id} />;
};

export default Img;
