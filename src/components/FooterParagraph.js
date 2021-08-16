import React from 'react'

const FooterParagraph = () => {
  return (
    <p className='footer-text'>
      copyright &copy; backroads travel tours company{' '}
      <span>{new Date().getFullYear()}</span>. all rights reserved
    </p>
  )
}

export default FooterParagraph
