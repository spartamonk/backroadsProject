import React from 'react'
import { icons } from '../utils/constants'

const NavIcons = () => {
  return (
    <ul className='nav-icons'>
      {icons.map((navIcon) => {
        const { icon, id, url } = navIcon
        return (
          <li key={id}>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='nav-icon'
            >
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default NavIcons
