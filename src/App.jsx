import './App.css'

import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import Testimonial from './components/Testimonial'

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Testimonial />
      <Services />
      <Projects />
      <Contact />
    </>
  )
}
