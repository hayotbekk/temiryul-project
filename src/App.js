import React from 'react'
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

export default App
