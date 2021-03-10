import withForm from "../hoc/withForm"

const SingInForm = ({handleSubmit, handleChange, data}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <input
            onChange={handleChange}
            value={data.email}
            name="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            value={data.password}
            name="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default withForm(SingInForm)
