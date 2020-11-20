import React from "react"
import Message1 from "./components/Message1"
import Message2 from "./components/Message2"

// import SignInForm from "./components/SignInForm";
//import RegisterForm from "./components/RegisterForm";

const App = () => (
  <div className="container">
    <Message1 role="ADMIN" />
    <Message2 role="USER" />

    {/* 
    <div className="row">
      <div className="col-md-5">
        <h1>Sign in</h1>
        <SignInForm />
      </div>
      <div className="offset-md-2 col-md-5">
        <h1>Register</h1>
        <RegisterForm />
      </div>
    </div> 
    */}
  </div>
)

export default App
