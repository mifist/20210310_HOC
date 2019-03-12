import React from "react";

function Person({ item }) {
  return (
    <li className="list-group-item">
      {item.name} - {item.films.length}
    </li>
  );
}

export default Person;
