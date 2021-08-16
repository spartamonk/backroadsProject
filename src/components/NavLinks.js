import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context/Context'
import { links } from '../utils/constants'
const NavLinks = () => {
 const {isNavbarOpen} = useGlobalContext()
 const containerRef = useRef(null);
 const linksRef= useRef(null);
 const { handleClick } = useGlobalContext()
useEffect(()=> {
 const linksHeight = linksRef.current.getBoundingClientRect().height;

 if(isNavbarOpen) {
  containerRef.current.style.height = `${linksHeight}px`
 } 
 else {
  containerRef.current.style.height = '0px'
 }
},[isNavbarOpen])
  return (
    <div ref={containerRef} className='links-container'>
      <ul ref={linksRef} className='nav-links'>
        {links.map((link) => {
          const { name, id, url } = link
          return (
            <li key={id}>
              <a href={url} onClick={handleClick} className='nav-link'>
                {name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavLinks
