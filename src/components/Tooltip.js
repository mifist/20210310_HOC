import React from "react";

const Tooltip = ({ date, children }) => (
  <>
    <h1 className="news-title">{children}</h1>
    <div className="tooltip-date">{date}</div>
  </>
);

export default Tooltip;
