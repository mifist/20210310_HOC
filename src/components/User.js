import React from "react"
import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForm"
import withToggle from "../hocs/withToggle"

const User = ({isToggled, handleToggled}) => {
  const submit = value => {
    console.log(value)
  }

  return (
    <div className="pt-3">
      <div className="form-check">
        <input
          checked={isToggled}
          onChange={handleToggled}
          type="checkbox"
          name="isRegister"
          id="isRegister"
          className="form-check-input"
        />
        <label className="form-check-label" htmlFor="isRegister">
          Switch to {isToggled ? "Login" : "Register"}
        </label>
      </div>
      <hr />

      <h2>{isToggled ? "Register" : "Login"}</h2>

      {isToggled ? (
        <RegisterForm submit={submit} />
      ) : (
        <LoginForm submit={submit} />
      )}
    </div>
  )
}

export default withToggle(User)
