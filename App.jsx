import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addblog from './components/Addblog'
import Homeview from './components/Homeview'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Addblog/>}/>
        <Route path='/' element={<Homeview/>}/>
      </Routes>
    </>
  )
}

export default App
