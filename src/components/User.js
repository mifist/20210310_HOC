import React from "react"
import PropTypes from "prop-types"
import {setDisplayName, setPropTypes, compose} from "recompose"
import Redux from "../fakeRedux"
import "./user.css"

const {connect} = Redux()

const User = ({firstName, secondName}) => (
  <div className="user">
    {firstName} {secondName}
  </div>
)

export default User
