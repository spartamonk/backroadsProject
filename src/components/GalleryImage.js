import React from 'react'
import {FaSearch} from 'react-icons/fa'

const GalleryImage = ({name, image, url}) => {
 return (
   <article className="gallery-img-container">
     <img src={image} alt={name} className="gallery-img" />
     <a href={url} className="gallery-icon">
       <FaSearch />
     </a>
   </article>
 )
}

export default GalleryImage
