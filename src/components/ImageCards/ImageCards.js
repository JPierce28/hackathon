import React from 'react'
import './ImageCards.css'

const ImageCards = ({id, image, artist, artDetails}) => {
  return (
    <div className='card' id={id}>
      <img className='image' onClick={event => artDetails(event.target.id)} src={image} alt={'Image by: '+ artist} height=''></img>
      <h1>{artist}</h1>
    </div>
  )
}

export default ImageCards
