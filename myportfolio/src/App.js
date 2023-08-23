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



const App = () => {
  return (

    <>
      <Router>
        {/* <Switch> */}

        <Navbarr />
        {/* <Galaxy/> */}
        {/* <AboutImage /> */}
        {/* <Hoodie /> */}


        <Home />
        <Socials />
        <About />
        <Skils />
        <Footer />



        {/* <Example /> */}
        {/* </Switch> */}

      </Router>
    </>
  )
}

export default App