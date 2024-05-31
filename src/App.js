import React from 'react'
import Header from './components/Header/Header'
// import Hero from './components/Hero'
import Hero from './components/Hero/Hero'
import Xizmatlar from './components/Xizmatlar/Xizmatlar'
import Rahbariyat from './components/Rahbariyat/Rahbariyat'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>

      {/* <Malumot/> */}
      <Xizmatlar/>
      <Rahbariyat/>
      <Contact/>
      <Footer/>


    </div>
  )
}

export default App