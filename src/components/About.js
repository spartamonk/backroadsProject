import React from 'react'
import aboutImg from '../assets/about.jpeg'
import { SectionTitle } from '.'

const About = () => {
 return (
   <section className='section about-section' id="about">
     <SectionTitle value1={'about'} value2={'us'} />
     <div className='section-center about-center'>
       <article className='about-img-container'>
         <img src={aboutImg} alt='nice beach' className='about-img' />
       </article>
       <article className='about-info'>
         <h3 className='about-title'>explore the difference</h3>
         <p className='about-text'>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
           quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
           unde dolor?
         </p>
         <p className='about-text'>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
           quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
           unde dolor?
         </p>
         <a href='#home' className='btn'>
           read more
         </a>
       </article>
     </div>
   </section>
 )
}

export default About
