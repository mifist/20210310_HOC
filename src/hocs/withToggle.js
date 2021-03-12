import {withState, withHandlers, compose} from "recompose"

const withToggle = compose(
  withState("on", "setOn", false),
  withHandlers({
    show: ({setOn}) => e => setOn(true),
    hide: ({setOn}) => e => setOn(false),
    toggle: ({setOn}) => e => setOn(x => !x),
  }),
)

export default withToggle
