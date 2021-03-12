import withToggle from "../hocs/withToggle"

const Tooltip = ({date, children, show, hide, on}) => (
  <>
    <h1 onMouseOver={show} onMouseOut={hide} className="news-title">
      {children}
    </h1>
    {on && <div className="tooltip-date">{date}</div>}
  </>
)

export default withToggle(Tooltip)
