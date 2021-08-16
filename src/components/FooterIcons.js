import React from 'react'

const FooterIcons = ({ icon, url }) => {
  return (
    <li>
      <a href={url} className='footer-icon'>
        {icon}
      </a>
    </li>
  )
}

export default FooterIcons
