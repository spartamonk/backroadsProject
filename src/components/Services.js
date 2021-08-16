import React from 'react'
import { SingleService } from '.'
import { SectionTitle } from '.'
import {services} from '../utils/constants'

const Services = () => {
 return (
  <section className="section services-section" id="services">
   <SectionTitle value1={'our'} value2={'services'} />
   <div className="section-center services-center">
    {
     services.map(service=> {
      const {id}= service
      return (
       <SingleService key={id} {...service}/>
      )
     })
    }
   </div>
  </section>
 )
}

export default Services
