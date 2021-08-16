import React from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.svg'
import { useGlobalContext } from '../context/Context'

const NavHeader = () => {
 const { toggleNavbar } = useGlobalContext()
 return (
   <div className='nav-header'>
     <a href='#home'>
       <img className='logo-img' src={logo} alt='Back roads' />
     </a>
     <span className='nav-toggle' onClick={toggleNavbar}>
       <FaBars />
     </span>
   </div>
 )
}

export default NavHeader
