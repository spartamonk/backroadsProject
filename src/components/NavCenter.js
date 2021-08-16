import React from 'react'
import NavHeader from './NavHeader'
import NavLinks from './NavLinks'
import NavIcons from './NavIcons'


const NavCenter = () => {
  
 return (
   <nav className='nav-center'>
     <NavHeader />
     <NavLinks />
     <NavIcons />
   </nav>
 )
}

export default NavCenter
