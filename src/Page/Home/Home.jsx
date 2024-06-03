import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Malumot from '../../components/malumot/malumot'
import Hero from '../../components/Hero/Hero'
import Xizmatlar from '../../components/Xizmatlar/Xizmatlar'
import Rahbariyat from '../../components/Rahbariyat/Rahbariyat'
import Contact from '../../components/Contact/Contact'
import LoginPage from '../../Login/LoginPage/LoginPage'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero/>
            <Malumot/>
            <Xizmatlar/>
            <Rahbariyat/>
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
