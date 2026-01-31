import { useState } from 'react'
import Hamburger from '/components/hamburger.jsx'
import Navigation from '/components/navigation.jsx'
import Hero from '/components/hero.jsx'
import About from '/components/about.jsx'
import Skills from '/components/skills.jsx'
import Project from '/components/project.jsx'
import Services from '/components/services.jsx'
import Contact from '/components/contact.jsx'
import Footer from '/components/footer.jsx'

import './App.css'

function App() {
  const [open, setOpen] = useState(false);

  return(
    <>
      <Navigation open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}/>
      <Hamburger open={open} onClose={() => setOpen(false)}/>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App
