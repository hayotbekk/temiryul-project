import React from 'react'
<<<<<<< HEAD
import Header from './components/Header/Header'
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
=======
import Home from './Page/Home/Home'
import WorkTool from './Page/workTool'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Login/LoginPage/LoginPage'
import AppIndex from './App/AppIndex'
import Admin from './SuperAdmin/Admin'

const App = () => (
  <div>
    <Routes>
      <Route path='/loginPage' element={<LoginPage />} />
      <Route path='/' element={<AppIndex/>} />
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    {/* <WorkTool/> */}
  </div>
)
>>>>>>> f1a9b500140e261a3514779f30c48f9432877cb0

export default App