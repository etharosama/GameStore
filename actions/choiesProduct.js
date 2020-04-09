export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const SHOW_PRODUCT = 'SHOW_PRODUCT'
export const HIDE_PRODUCT = 'HIDE_PRODUCT'

export const INCREASE = 'INCREASE'
export const DECRICING = 'DECRICING'
export const CLEAR ='CLEAR'

export function addPRODUCT(id) {
  return { type: ADD_PRODUCT, id }
}

export function REMOVEPRODUCT(id) {
  return { type: REMOVE_PRODUCT, id }
}

export function SHOWPRODUCT(product) {
  return { type: SHOW_PRODUCT, product }
}

export function HIDEPRODUCT(product) {
  return { type: HIDE_PRODUCT , product }
}


export function ADDCOUNT(id) {
  return { type: INCREASE , id }
}
export function DECRING(id) {
  return { type: DECRICING  , id }
}
export function Clear(id) {
  return { type: CLEAR }
}
