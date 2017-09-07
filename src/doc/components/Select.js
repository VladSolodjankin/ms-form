import React from 'react'

const Select = props => {
  let {error, ...rest} = props
  return <span>
    <select {...rest}>
      {props.children}
    </select>
    {error}
  </span>
}

export default Select