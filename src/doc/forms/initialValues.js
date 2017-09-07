import React from 'react'
import { formConnect } from '../../core'
import Label from '../components/label'


class InitialValues extends React.Component {

  render() {
    let fp = this.fp

    const fld = this.props.formField({
      skip: ['onSelected'],
    })

    return (
      <div>
        <div>
          <Label>input</Label>
          <input {...fld("input")} />
        </div>
        <div>
          <Label>select</Label>
          <select {...fld("select")}>
            <option value={1}>option1</option>
            <option value={2}>option2</option>
            <option value={3}>option3</option>
          </select>
        </div>
      </div>
    )
  }
}

export default formConnect(
  {form:"initialValues", initialValues: {input:"hello", select:"2"}}
)(InitialValues)