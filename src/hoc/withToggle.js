import {Component} from "react"

const withToggle = BaseComponent => {
  class ToggleClass extends Component {
    state = {openId: null}

    toggle = id =>
      this.setState(({openId}) => ({
        openId: openId === id ? null : id,
      }))

    render() {
      return (
        <BaseComponent {...this.state} toggle={this.toggle} {...this.props} />
      )
    }
  }
  return ToggleClass
}

export default withToggle
