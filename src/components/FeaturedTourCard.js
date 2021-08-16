import React from 'react'
import moment from 'moment'
import {formatPrice} from '../utils/helpers'
const FeaturedTourCard = ({
  name,
  image,
  text,
  days,
  location,
  price,
  date,
  icon,
}) => {
  return (
    <article className='card'>
      <div className='card-img-container'>
        <img className='card-img' src={image} alt={name} />
        <p className="card-date">{moment(date).format('MMMM Do, YYYY')}</p>
      </div>
      <div className='card-info'>
        <div className='card-title-container'>
          <h4>{name}</h4>
          <p>{days}</p>
        </div>
        <p className="card-text">
         {text}
        </p>
        <div className="card-footer">
         <p><span className="card-footer-icon">{icon}</span> {location}</p>
         <p>from {formatPrice(price)}</p>
        </div>
      </div>
    </article>
  )
}

export default FeaturedTourCard
