import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import './App.css';
import Details from '../Details/Details';

function App() {
  return (
    <Routes>
      <Route 
      path='/'
      element={<Home/>}
      />
      <Route
      path='/:id'
      element={<Details />}
      />
    </Routes>
  )
}

export default App;
