import React from 'react'

const FooterLinks = ({ name, url }) => {
  return (
      <li>
        <a href={url} className='footer-link'>
          {name}
        </a>
      </li>
  )
}

export default FooterLinks
