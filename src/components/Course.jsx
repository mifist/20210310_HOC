import {memo} from "react"

const Course = ({item, toggle, isOpen}) => {
  console.log("RENDER", item.id)

  return (
    <li className="list-group-item">
      <h2>{item.title}</h2>
      {isOpen && <p>{item.anons}</p>}
      <button onClick={() => toggle(item.id)} className="btn btn-primary">
        {isOpen ? "Close anons" : "Show anons"}
      </button>
    </li>
  )
}

export default memo(Course)
