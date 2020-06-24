import React from "react";
import Tooltip from "./Tooltip";
import Content from "./Content";

const News = ({ title, status }) => (
  <div className="news">
    <Tooltip date="created 22.06.2020">{title}</Tooltip>
    <Content />
  </div>
);

export default News;
