import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./top.jsx"
import MediaCard from "./details.jsx"
import Contact from "./contact.jsx"

function App() {
 

  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <div class="bg-gray-500">
      <MediaCard />
      <br></br>
      <br></br>
      <Contact />
      </div>
      
    </>
  )
}

export default App
