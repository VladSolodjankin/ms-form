import React from 'react'
import { formConnect } from '../../core'
import Label from '../components/label'
import Input from '../components/Input'
import Select from '../components/Select'

const validate = form => {
  const r = {}
  if (!form.input)
    r.input = "required"

  return r
}

let vt
const validateInput = (value, cb) => {
  clearTimeout(vt)
  // check value exists
  if (!value) {
    cb(null);
  }
  else {
    // otherwise send async request
    vt = setTimeout(() => cb("exists"), 800)
  }
}


class AsyncValidation extends React.Component {

  onChange = (ev) => {
    let vr = this.props.formAsyncValidationResult
    let f = this.props.formGet(ev)
    // make async validation input field
    if (ev && ev.target && ev.target.name === 'input') {
      validateInput(f.input, r => vr({input: r}))
    }
    this.props.formChanged(f)
  }

  render() {

    const fld = this.props.formField({
      skip: ['onSelected'],
      onChange: this.onChange
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
  {form:"asyncValidation", validate}
)(AsyncValidation)