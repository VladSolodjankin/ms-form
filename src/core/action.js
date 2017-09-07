import { FORM_CHANGED, FORM_RESET } from './reducer'

export function formChanged (form, values) {
  return {
    type: FORM_CHANGED,
    meta: { form },
    payload: values
  }
}

export function formReset (form) {
  return {
    type: FORM_RESET,
    meta: { form }
  }
}
