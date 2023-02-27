import React from 'react'
import './Home.css'
import imageObjects from '../../mockData'
import ImageCards from '../ImageCards/ImageCards'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const evenNumbers = imageObjects.filter(item => {
    return item.id % 2 === 0
  })

  const oddNumbers = imageObjects.filter(item => {
    return item.id % 2 !== 0
  })

  const rightImages = evenNumbers.map(card => {
    return (
      <ImageCards 
        key={card.id}
        id={card.id}
        artist={card.artist}
        image={card.image}
      />
    )
  })

  const leftImages = oddNumbers.map(card => {
    return (
      <ImageCards 
        key={card.id}
        id={card.id}
        artist={card.artist}
        image={card.image}
      />
    )
  })

  return (
    <section className='home-page'>
      <header className='header'>
        <h1>Local Art</h1>
      </header>
      <div className='card-container'>
        <div className='card-container-left'>
          {leftImages}
        </div>
        <div className='card-container-right'>
          {rightImages}
        </div>
      </div>
    </section>
  )
}

export default Home