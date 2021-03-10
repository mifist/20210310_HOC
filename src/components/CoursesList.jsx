import data from "../data"
import Course from "./Course"
import useToggle from "../hooks/useToggle"

const CoursesList = () => {
  const {openId, toggle} = useToggle()

  return (
    <ul className="list-group">
      {data.map(item => (
        <Course
          key={item.id}
          isOpen={openId === item.id}
          toggle={toggle}
          item={item}
        />
      ))}
    </ul>
  )
}

export default CoursesList
