let defaultState = {
  /*
  apply: {}
  */
}



export const FORM_CHANGED = "FORM_CHANGED"
export const FORM_RESET = "FORM_RESET"

export default function (state = defaultState, action) {

  switch (action.type) {
    case FORM_CHANGED:
      let ns = {...state}
      ns[action.meta.form] = action.payload
      return ns

    case FORM_RESET:
      let ns2 = {...state}
      ns2[action.meta.form] = null
      return ns2

    default:
      return state
  }
}