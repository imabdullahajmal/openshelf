import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Courses from './pages/Courses'
import DevNotification from './components/DevNotification'

const App = () => {
  return (
    <div>
      <DevNotification />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
    </div>
  )
}

export default App