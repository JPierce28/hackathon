import React from 'react'
import './Home.css'
import imageObjects from '../../mockData'
import ImageCards from '../ImageCards/ImageCards'
import { useState } from 'react'

const Home = () => {
  const [searchParams, setSearchParams] = useState('')
  const [artArray, setArtArray] = useState(imageObjects)

  const evenNumbers = artArray.filter(item => {
    return item.id % 2 === 0
  })

  const oddNumbers = artArray.filter(item => {
    return item.id % 2 !== 0
  })

  const setSearchFilter = () => {
    let newSearch = artArray.contains(searchParams)
    console.log(newSearch)
  }

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
        placeholder='Search by Location or Artist'
        value={searchParams}
        onChange={setSearchParams}
        />
        <button className='search-button' onClick={setSearchFilter}>Search</button>
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