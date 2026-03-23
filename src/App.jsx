import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App