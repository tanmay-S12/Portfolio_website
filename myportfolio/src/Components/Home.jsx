import React from 'react'
import './css/Home.css'
// import { requirePropFactory } from '@mui/material'
import { FaGreaterThan } from 'react-icons/fa'
import Galaxy from './Galaxy'

const Home = () => {
  return (
    <>
      <div className='home-main' id='home'>


        <div className='home-content' style={{}}>
          <h3>Hi, I'm Tanmay</h3>

          <h3 style={{ fontSize: '4.5rem' }}>Web Developer</h3>
          <p style={{ display: 'flex', flexWrap: 'wrap' }}>Welcome to my Full Stack Developer portfolio. <br />
            I'm always eager to learn new things and stay updated with the latest trends in web development.
          </p>
          <a href="#">About Me <FaGreaterThan /></a>
          {/* <h4>
            <span>Always</span>
            <div className="message">
              <div>learning</div>
              <div>building</div>
              <div>developing</div>
            </div>
          </h4> */}


        </div>

        <div className='home-image floating'>
          <img src={require('../assets/Home-computer.png')} alt="" />
        </div>
        <Galaxy />
      </div >


    </>
  )
}

export default Home