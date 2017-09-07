# MS-Form


formConnect options
```js

let rest = {
  // form name
  form,

  // validate function
  validate,

  asyncValidate,

  // initial values
  initialValues
}
```

Form gets props
```js
let rest = {
  // save form to state
  formChanged: this.formChanged,
  // reset form
  formReset: this.formReset,
  // form values
  formValues,
  // form validation
  formValidation,
  // form isValid flag
  formIsValid,

  // send async validation result through this function
  formAsyncValidationResult: this.asyncValidationResult,

  // function to get changed form, after events
  formGet: this.formGet, // composit, takes input parameters of onChange and onSelected
  formGetOnChange: this.formGetOnChange,
  formGetOnSelected: this.formGetOnSelected,

  // field props generator
  formField: this.formField
}
```


checkout [demo](https://maintstar.github.io/ms-form/build/) 
