import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import FavouritePage from './pages/FavouritePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/favourites" element={<FavouritePage/>}/>
      </Routes>
    </>
  )
}

export default App;
