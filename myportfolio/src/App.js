import React from 'react'
import Home from './Components/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Skils from './Components/Skils'
import './App.css'
import About from './Components/About'
import Navbarr from './Components/Navbarr'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Socials from './Components/Socials'



const App = () => {
  return (

    <>
      <Router>
        {/* <Switch> */}

        <Navbarr />
        {/* <AboutImage /> */}
        {/* <Hoodie /> */}
        <Home />
        <Socials />
        <About />
        <Skils />
        {/* </Switch> */}
        <Socials />
      </Router>
    </>
  )
}

export default App