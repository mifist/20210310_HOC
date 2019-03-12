import React, {Component} from "react"

class Filter extends Component {
  render() {
    const {filter, handleChange} = this.props
    return (
      <div className="form-group">
        <label>Enter search word</label>
        <input
          value={filter}
          onChange={e => handleChange(e.target.value)}
          className="form-control"
        />
      </div>
    )
  }
}

export default Filter
