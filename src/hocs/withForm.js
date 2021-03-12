import React from "react"

const withForm = initData => {
  return function (Component) {
    return class WrapWithForm extends React.Component {
      state = {...initData}

      handleChange = e =>
        this.setState({
          [e.target.name]: e.target.value,
        })

      submit = e => {
        e.preventDefault()
        if (this.props.submit) {
          this.props.submit(this.state)
        }
      }

      render() {
        return (
          <Component
            {...this.state}
            {...this.props}
            handleChange={this.handleChange}
            submit={this.submit}
          />
        )
      }
    }
  }
}

export default withForm
