import React, {Component} from "react"

class Course extends Component {
  render() {
    const {item} = this.props
    return (
      <li className="list-group-item">
        <h2>{item.title}</h2>
        <button className="btn btn-primary">Open</button>
      </li>
    )
  }
}

export default Course
