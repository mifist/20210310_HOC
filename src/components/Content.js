import withToggle from "../hocs/withToggle"

const Content = ({on, toggle}) => (
  <div className="content">
    <span onClick={toggle} className="show-more">
      {on ? "Hide more" : "Show more"}
    </span>
    {on && (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
        vulputate odio, sit amet eleifend turpis. Ut faucibus interdum
        malesuada.{" "}
      </p>
    )}
  </div>
)

export default withToggle(Content)
