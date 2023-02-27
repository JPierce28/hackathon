import React from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import imageObjects from '../../mockData'

const Details = () => {
  const { id } = useParams()

  const currentImage = imageObjects.filter(image => {
    return image.id == id
  })

  return (
    <section className='details-page'>
      <header className='details-header'>
        <h1>art details</h1>
      </header>
      <div className='details-container'>
        <h1>Container</h1>
      </div>
    </section>
  )
}

export default Details