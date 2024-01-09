import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Intro from './Components/Intro/Intro.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Work from './Components/Works/Work.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Projects from './Components/Projects/Projects.jsx'


function App() {
  

  return (
    <>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Work/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
