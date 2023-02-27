import React from 'react'

const ImageCards = ({id, image, artist}) => {
  return (
    <div className='card'>
      <image className='image' src={image}></image>
      <h1>{artist}</h1>
    </div>
  )
}

export default ImageCards
