import React from "react"

const withToggle = Component => {
  return class WrappedWithToggle extends React.Component {
    state = {
      isToggled: false,
    }

    handleToggled = e =>
      this.setState({
        isToggled: Boolean(e.target.checked),
      })

    render() {
      return (
        <Component
          {...this.state}
          handleToggled={this.handleToggled}
          {...this.props}
        />
      )
    }
  }
}

export default withToggle
