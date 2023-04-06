import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'

function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <PriceList></PriceList>
    </div>
  )
}

export default App
