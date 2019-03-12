import React, {Component} from "react"
import PersonList from "./components/persons/PersonList"
import Filter from "./components/Filter"

class App extends Component {
  state = {
    results: [],
    filter: "",
  }

  async componentDidMount() {
    const r = await fetch("https://swapi.dev/api/people")
    const {results} = await r.json()
    this.setState({results})
  }

  handleChange = filter => this.setState({filter})

  get getResults() {
    let {results, filter} = this.state
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

export default App

// "https://swapi.dev/api/people"
