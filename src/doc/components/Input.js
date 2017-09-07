import React from 'react'

const Input = props => {
  let {error, ...rest} = props
  return <span>
    <input {...rest} /> {error}
  </span>
}

export default Input