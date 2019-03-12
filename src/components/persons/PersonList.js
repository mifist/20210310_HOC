import React from "react";
import Person from "./Person";

function PersonList({ results }) {
  return (
    <ul className="list-group">
      {results.map(item => (
        <Person key={item.name} item={item} />
      ))}
    </ul>
  );
}

export default PersonList;
