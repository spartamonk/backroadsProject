import React, {useContext, createContext, useReducer} from 'react'
import { reducer } from '../reducers/reducer'
import { SHOW_NAV_LINKS, CLOSE_NAV_LINKS } from '../actions'
const AppContext = createContext()
const initialState ={
 isNavbarOpen: false,
 
}
const AppProvider =({children}) => {
const [state, dispatch] = useReducer(reducer, initialState)
 
const toggleNavbar = ()=> {
 dispatch({type: SHOW_NAV_LINKS})
}
const closeNavbar =()=> {
  dispatch({ type: CLOSE_NAV_LINKS })
}
const handleClick =(e)=> {
  e.preventDefault()
  dispatch({ type: SHOW_NAV_LINKS })
  const target = e.target.getAttribute('href');
  
  const location = document.querySelector(target).offsetTop;
  window.scrollTo({
    left: 0,
    top: location - 62,
  })
}

 return (
   <AppContext.Provider
     value={{ ...state, toggleNavbar, handleClick, closeNavbar }}
   >
     {children}
   </AppContext.Provider>
 )
}
const useGlobalContext =()=> {
 return useContext(AppContext)
}
export {useGlobalContext, AppProvider}