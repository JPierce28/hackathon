import React from 'react'
import './Details.css'
import { useParams, Link } from 'react-router-dom'
import imageObjects from '../../mockData'

const Details = () => {
  const { id } = useParams()

  const currentImage = imageObjects.filter(image => {
    return image.id == id
  })

  const currentArtist = currentImage[0]

  return (
    <section className='details-page'>
      <header className='details-header'>
        <Link to='/'>
          <h1>Art Details</h1>
        </Link>
      </header>
      <div className='details-container'>
        <div>
          <img className='large-image' src={currentArtist.image} alt={'Image of art by '+ currentArtist.artist}></img>
        </div>
        <div className='bottom-info'>
          <p>Artist: {currentArtist.artist}</p>
          <p>Studio Location: {currentArtist.location}</p>
          <p>Artist WebSite: {currentArtist.socialMedia.artistWebsite}</p>
          <p>Instagram: {currentArtist.socialMedia.instagram}</p>
          <p>Twitter: {currentArtist.socialMedia.twitter}</p>
        </div>
      </div>
    </section>
  )
}

export default Details