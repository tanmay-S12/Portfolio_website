import React from 'react'
import Home from './Components/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Skils from './Components/Skills'
import './App.css'
import About from './Components/About'
import Navbarr from './Components/Navbarr'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Socials from './Components/Socials'
import Galaxy from './Components/Galaxy'
import Example from './Components/Example'
import Footer from './Components/Footer'
import Projects from './Components/Projects'



const App = () => {
  return (

    <>
      <Router>
        {/* <Switch> */}

        <Navbarr />



        <Home />
        <Socials />
        <About />
        <Skils />
        <Projects />
        <Footer />




        {/* <Example /> */}
        {/* </Switch> */}

      </Router>
    </>
  )
}

export default App