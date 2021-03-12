import React, {Component} from "react"
import PersonList from "./components/persons/PersonList"
import Filter from "./components/Filter"
import withFetch from "./hoc/withFetch"

class App extends Component {
  state = {
    filter: "",
  }

  handleChange = filter => this.setState({filter})

  get getResults() {
    let {results} = this.props
    let {filter} = this.state

    if (filter) {
      results = results.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase()),
      )
    }
    return <PersonList results={results} />
  }

  render() {
    const {filter} = this.state
    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-3">
            <Filter filter={filter} handleChange={this.handleChange} />
          </div>
          <div className="offset-md-1 col-md-4">{this.getResults}</div>
        </div>
      </div>
    )
  }
}

export default withFetch("https://swapi.dev/api/people")(App)
