import React from "react";

const P = ({ className, children, style, id }) => {
  return (
    <p className={className} style={style} id={id}>
      {children}
    </p>
  );
};

export default P;
