import React from "react";

const Div = ({ className, children, style, id }) => {
  return (
    <div className={className} style={style} id={id}>
      {children}
    </div>
  );
};

export default Div;
