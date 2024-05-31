import React from 'react'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Malumot from './components/malumot/malumot'
import Xizmatlar from './components/Xizmatlar/Xizmatlar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Malumot/>
      <Xizmatlar/>
      <Footer/>
    </div >
  )
}

export default App
