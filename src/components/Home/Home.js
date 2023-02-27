import React from 'react'
import './Home.css'
import ImageCards from '../ImageCards/ImageCards'
import { useState } from 'react'

const Home = ({ setArray, currentArray }) => {
  const [searchParams, setSearchParams] = useState('')

  const filteredArt = !!searchParams ? currentArray.filter(art => art.artist.toLowerCase().includes(searchParams.toLowerCase()) || art.city.toLowerCase().includes(searchParams.toLowerCase())) : currentArray


  const evenNumbers = filteredArt.filter(item => {
    return item.id % 2 === 0
  })

  const oddNumbers = filteredArt.filter(item => {
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
      <form className='search-form'>
        <input
        className='art-location-search'
        type='text'
        placeholder='Search by Location or Artist'
        value={searchParams}
        onChange={event => setSearchParams(event.target.value)}
        />
      </form>
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