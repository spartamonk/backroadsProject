import React from 'react'
import GalleryImage from './GalleryImage'
import { tourImages } from '../utils/constants'
const Gallery = () => {
 return (
  <section className="gallery-section" id="gallery">
   <div className="gallery-center">
    {
     tourImages.map(tourImage=> {
      const {id}= tourImage
      return (
       <GalleryImage key={id} {...tourImage} />
      )
     })
    }
   </div>
  </section>
 )
}

export default Gallery
