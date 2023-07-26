import React from 'react'
import Home from './Components/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Skils from './Components/Skils'
import './App.css'
import About from './Components/About'
import Navbarr from './Components/Navbarr'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (

    <>
      <Router>
        {/* <Switch> */}
        {/* <Home/> */}
        <Navbarr />
        {/* <Skils /> */}
        <About />
        {/* </Switch> */}
      </Router>
    </>
  )
}

export default App