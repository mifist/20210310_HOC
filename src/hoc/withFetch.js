import React from "react"

const withFetch = url => BaseComponent => {
  class WrappedWithFetch extends React.Component {
    state = {
      results: [],
    }

    async componentDidMount() {
      const r = await fetch(url)
      const {results} = await r.json()
      this.setState({results})
    }

    render() {
      return <BaseComponent {...this.state} {...this.props} />
    }
  }
  return WrappedWithFetch
}

export default withFetch
