import PersonList from "./components/persons/PersonList"
import Filter from "./components/Filter"
import withFetch from "./hoc/withFetch"
import withFilter from "./hoc/withFilter"

const App = ({results, filter, handleChange}) => {
  const getResults = () => {
    if (filter) {
      results = results.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase()),
      )
    }
    return <PersonList results={results} />
  }
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-md-3">
          <Filter filter={filter} handleChange={handleChange} />
        </div>
        <div className="offset-md-1 col-md-4">{getResults()}</div>
      </div>
    </div>
  )
}

export default withFetch("https://swapi.dev/api/people")(withFilter(App))
