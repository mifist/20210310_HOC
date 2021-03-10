import React, {Component} from "react"
import data from "../data"
import Course from "./Course"

class CoursesList extends Component {
  render() {
    return (
      <ul className="list-group">
        {data.map(item => (
          <Course key={item.id} item={item} />
        ))}
      </ul>
    )
  }
}

export default CoursesList
