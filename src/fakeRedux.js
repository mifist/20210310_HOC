import React from "react"

export default function Redux() {
  return {
    connect: BaseComponent => props => (
      <BaseComponent
        dispatch={({type}) => console.log("Updated: ", type)}
        {...props}
      />
    ),
  }
}
