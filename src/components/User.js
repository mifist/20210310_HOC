import React from "react"
import PropTypes from "prop-types"
import {setDisplayName, setPropTypes, compose} from "recompose"
import Redux from "../fakeRedux"
import "./user.css"

const {connect} = Redux()

const enhance = compose(
  connect,
  setDisplayName("MyComponent"),
  setPropTypes({
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  }),
)

const User = ({firstName, secondName, dispatch}) => (
  <div onClick={() => dispatch({type: "TEST"})} className="user">
    {firstName} {secondName}
  </div>
)

export default enhance(User)
