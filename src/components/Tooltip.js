import React from "react";

const Tooltip = ({ text, children }) => (
  <span>
    <div className="top-tooltip">{text}</div>
    <span>{children}</span>
  </span>
);

export default Tooltip;
