import React from "react"

class PrintScrollToBottom extends React.Component {
  componentDidMount() {
    this.scroll()
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    const {clientHeight, scrollTop, scrollHeight} = document.documentElement
    return clientHeight + scrollTop < scrollHeight
  }

  componentDidUpdate(prevProps, prevState, isScrolledUp) {
    if (!isScrolledUp) {
      this.scroll()
    }
  }

  scroll() {
    window.scroll(0, document.documentElement.scrollHeight)
  }
  render() {
    return this.props.children
  }
}

export default PrintScrollToBottom
