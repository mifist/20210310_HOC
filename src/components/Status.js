import React from "react";
import StatusList from "./StatusList";

const Status = ({ status }) => (
  <span>
    {status}
    <StatusList />
  </span>
);

export default Status;
