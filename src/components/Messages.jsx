import React from "react"
import {subscribeToMessages, getInitData} from "../data"

class Messages extends React.Component {
  state = {
    messages: getInitData(),
  }

  componentDidMount() {
    subscribeToMessages(message =>
      this.setState(({messages}) => ({
        messages: [...messages, message],
      })),
    )
  }

  render() {
    const {messages} = this.state
    return (
      <div className="container">
        <span className="info">{messages.length}</span>

        <ul className="grid">
          {messages.map(message => (
            <li className="box" key={message.id}>
              <div
                className="box__avatar"
                style={{backgroundImage: `url(${message.img})`}}
              />
              <p className="box__content">{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Messages
