import React from "react";

const H3 = ({ className, children, style, id }) => {
  return (
    <h3 className={className} style={style} id={id}>
      {children}
    </h3>
  );
};

export default H3;
