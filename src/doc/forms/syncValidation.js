import React from 'react'
import { formConnect } from '../../core'
import Label from '../components/label'
import Input from '../components/Input'
import Select from '../components/Select'

const validate = form => {
  const r = {}
  if (!form.input)
    r.input = "required"

  if (!form.select)
    r.select = "required"
  return r
}


class SyncValidation extends React.Component {


  render() {

    const fld = this.props.formField({
      skip: ['onSelected']
    })

    return (
      <div>
        <div>
          <Label>input</Label>
          <Input {...fld("input")} />
        </div>
        <div>
          <Label>select</Label>
          <Select {...fld("select")}>
            <option />
            <option value={1}>option1</option>
            <option value={2}>option2</option>
            <option value={3}>option3</option>
          </Select>
        </div>
      </div>
    )
  }
}


export default formConnect(
  {form:"syncValidation", validate}
)(SyncValidation)