import {Component} from "react"

function withForm(BaseComponent) {
  class WithFormClass extends Component {
    state = {
      data: {...this.props.initState},
    }

    handleChange = ({target}) =>
      this.setState({
        data: {...this.state.data, [target.name]: target.value},
      })

    handleSubmit = e => {
      e.preventDefault()
      console.log(this.state)
      this.setState({data: this.props.initState})
    }
    render() {
      return (
        <BaseComponent
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          {...this.props}
        />
      )
    }
  }

  return WithFormClass
}

export default withForm
