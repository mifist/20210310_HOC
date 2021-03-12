import React from "react"

const withFilter = BaseComponent => {
  class WrapFithFilter extends React.Component {
    state = {
      filter: "",
    }

    handleChange = filter => this.setState({filter})

    render() {
      return (
        <BaseComponent
          {...this.state}
          handleChange={this.handleChange}
          {...this.props}
        />
      )
    }
  }
  return WrapFithFilter
}

export default withFilter
