import { SHOW_NAV_LINKS, CLOSE_NAV_LINKS } from '../actions'
export const reducer = (state, action) => {
 if(action.type ===SHOW_NAV_LINKS) {
  return {
   ...state,
   isNavbarOpen: !state.isNavbarOpen,
  }
 }
 if (action.type === CLOSE_NAV_LINKS) {
  return {
   ...state,
   isNavbarOpen: false
  }
 }
   throw new Error(`no matching ${action.type} - action type`)
}