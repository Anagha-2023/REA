import React from 'react'
import Two from '../Components/Two'

function One(props) {
  return (
    <div>
      <h1>Layer One</h1>
      <Two data={props.data}></Two>
    </div>
  )
}

export default One
