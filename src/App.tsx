import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Tvseries from './pages/Tvseries'
import data from './data.json'
import { useState } from 'react'



function App() {

  return (
    <>
    <div className="kunilingusi">

      <div className='header'>
        <Link to={'/'}><img className='witeli' src="Movie.svg" alt="" /></Link>
        <nav>
          <Link to={'/'}><img className='zoma' src="icon-nav-home.svg" alt="" /></Link>
          <Link to={'/movies'}><img className='zoma' src="icon-nav-movies.svg" alt="" /></Link>
          <Link to={'/tvseries'}><img className='zoma' src="icon-nav-tv-series.svg" alt="" /></Link>
        </nav>
        <img className='nigga' src="Oval.svg" alt="" />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tvseries" element={<Tvseries/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
