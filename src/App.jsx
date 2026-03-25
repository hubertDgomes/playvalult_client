import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Store from './components/pages/Store'
import GameProfile from './components/pages/GameProfile'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/gameprofile/:id' element={<GameProfile/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App