import {withState} from "recompose"

const enhance = withState("show", "setShow", false)

const Content = ({show, setShow}) => (
  <div className="content">
    <span onClick={() => setShow(x => !x)} className="show-more">
      {show ? "Hide more" : "Show more"}
    </span>
    {show && (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
        vulputate odio, sit amet eleifend turpis. Ut faucibus interdum
        malesuada.{" "}
      </p>
    )}
  </div>
)

export default enhance(Content)
