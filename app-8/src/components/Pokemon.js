import React from 'react'

export default function Pokemon(props) {
  return (
    <div>
      <h4>Name: {props.name}</h4>
      <h4>order: {props.id}</h4>
    </div>
  )
}
