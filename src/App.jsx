import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs'
import Catalogue from './components/Catalogue'
import CareerPage from './components/CareerPage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <HomePage />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="catalogue">
        <Catalogue />
      </div>
      <div id="careers">
        <CareerPage />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App