import React from "react"
import Navbar from "./Component/Navbar/Navbar"
import Hero from "./Component/Hero/Hero"
import About from "./Component/About/About"
import Services from "./Component/Services/Services"
import MyWork from "./Component/MyWork/MyWork"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer/Footer"
import Skills from "./Component/Skills/Skills"
import Resume from "./Component/Resume/Resume"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Skills/>
    <Resume/>
    <MyWork/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
