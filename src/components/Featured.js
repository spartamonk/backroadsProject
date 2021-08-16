import React from 'react'
import SectionTitle from './SectionTitle'
import { FeaturedTourCard } from '.'
import { tourCards } from '../utils/constants'

const Featured = () => {
 return (
   <section className='section featured-section' id="featured">
     <SectionTitle value1={'featured'} value2={'tours'} />
     <div className='section-center featured-center'>
       {tourCards.map((card) => {
         const { id } = card
         return <FeaturedTourCard key={id} {...card} />
       })}
     </div>
     <div className='tour-btn'>
       <a href='#home' className='btn'>
         all tours
       </a>
     </div>
   </section>
 )
}

export default Featured
