import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import './App.css';
import Details from '../Details/Details';
import { useState } from 'react';
import imageObjects from '../../mockData'

function App() {
  const [currentArray, setCurrentArray] = useState(imageObjects)

  const setArray = (value) => {
    let newArray = imageObjects.filter(art => {
      return art.location === value
    })
    console.log(newArray)
    setCurrentArray(newArray)
  }

  return (
    <Routes>
      <Route 
      path='/'
      element={<Home
        setArray={setArray}
        currentArray={currentArray}
      />}
      />
      <Route
      path='/:id'
      element={<Details />}
      />
    </Routes>
  )
}

export default App;
