import React from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams()

  return (
    <section className='details-page'>
      <h1>Hello</h1>
    </section>
  )
}

export default Details