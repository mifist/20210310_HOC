import {Component} from "react"
import CoursesLists from "./components/CoursesList"

class App extends Component {
  render() {
    return (
      <div className="container">
        <CoursesLists />
      </div>
    )
  }
}

export default App
