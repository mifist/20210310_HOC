import React from "react";
import Tooltip from "./Tooltip";
import Status from "./Status";

const User = ({ name, status }) => (
  <div className="user">
    <Tooltip text="Cool Dude!">{name}</Tooltip> -
    <Status status={status} />
  </div>
);

export default User;
