import React from 'react'
import { FooterLinks, FooterIcons, FooterParagraph } from '.'
import { links, icons } from '../utils/constants'

const Footer = () => {
  return (
    <footer className='section footer-section'>
      <ul className='footer-links'>
        {links.map((footerLink) => {
          const { id } = footerLink
          return <FooterLinks key={id} {...footerLink} />
        })}
      </ul>
      <ul className='footer-icons'>
        {icons.map((footerIcon) => {
          const { id } = footerIcon
          return <FooterIcons key={id} {...footerIcon} />
        })}
      </ul>
      <FooterParagraph />
    </footer>
  )
}

export default Footer
