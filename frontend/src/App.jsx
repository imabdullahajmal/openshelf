import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/books' element={<Books />}></Route>
    </Routes>
  )
}

export default App
