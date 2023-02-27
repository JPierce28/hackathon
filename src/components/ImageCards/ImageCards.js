import React from 'react'
import './ImageCards.css'
import {Link} from 'react-router-dom'

const ImageCards = ({id, image, artist}) => {
  return (
    <Link to={`/${id}`}>
      <div className='card' id={id}>
        <img className='image' src={image} alt={'Image by: '+ artist} height=''></img>
        <h1>{artist}</h1>
      </div>
    </Link>
  )
}

export default ImageCards
