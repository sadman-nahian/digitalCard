import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Main from "./Components/Main"
import Picture from "./Components/Picture"
import Buttons from "./Components/Buttons"
import About from "./Components/About"
import Interests from "./Components/Interests"
import Footer from "./Components/Footer"




function App() {
  

  return (
    <div className="card-body">
      
      <Picture/>
      <Main/>
      <Buttons/>
      <About/>
      <Interests/>
      <Footer/>

      

    </div>
  )
}

export default App
