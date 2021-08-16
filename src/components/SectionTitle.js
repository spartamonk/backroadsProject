import React from 'react'

const SectionTitle = ({value1, value2}) => {
 return (
   <div className='section-title'>
     <h2>
       {value1} <span>{value2}</span>
     </h2>
   </div>
 )
}

export default SectionTitle
