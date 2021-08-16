import React from 'react'

const ContactForm = () => {
  return (
    <section className='section contact-section' id="contact">
      <div className='section-center contact-center'>
        <article className='contact-info'>
          <h3>want latest tour info and updates?</h3>
          <p>Sign up for newsletter and stay up to date</p>
        </article>
        <form action='' className='contact-form'>
          <input
            type='email'
            className='form-control'
            placeholder='your email'
            name='email'
          />
          <button className='submit-btn' type='submit'>
            submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
