import React from 'react'
import './css/Home.css'
// import { requirePropFactory } from '@mui/material'
import { FaGreaterThan } from 'react-icons/fa'
import Galaxy from './Galaxy'
import { GrDocumentVerified } from 'react-icons/gr'

const Home = () => {
  const screenWidth = window.innerWidth;
  const openResume = () => {
    // Replace with your actual URL
    const resumeUrl = '';
    window.open(resumeUrl, '_blank');
  };
  return (
    <>
      <div className='home-main' id='home'>

        <div id='HomeContent' className='home-content' style={{}}>
          <h3 style={{ fontSize: screenWidth <= 320 ? '1.75rem' : '3.5rem' }}>Hi, I'm Tanmay</h3>

          <h3 style={{ fontSize: screenWidth <= 320 ? '2rem' : '4.5rem' }}>Web Developer</h3>

          <p style={{
            display: 'flex', flexWrap: 'wrap',
            fontSize: screenWidth <= 320 ? 'o.3rem' : '1.3rem'
          }}>
            I'm a passionate web developer who thrives on learning, coding & Crafting impactful solutions in the virtual realm. <br />
            <span style={{ fontWeight: 'bold', fontSize: screenWidth <= 320 ? 'o.7rem' : '1.4rem', marginTop: screenWidth <= 320 ? '0.2rem' : '0.3rem', }}>Building projects is my jam !🚀</span>
          </p>
          {/* <a href="#">About Me <FaGreaterThan /></a> */}

          <button id="resume-button" className="button-5" role="button" onClick={openResume}
            style={{
              // backgroundColor: 'white'
            }}> Resume </button>

        </div>

        <div id='HomeImage'
          // className='home-image floating'>
          // className={screenWidth <= 320 ? 'home-image floating' : 'home-image mobile-float'}>
          className={`home-image ${screenWidth <= 375 ? 'mobile-float' : 'floating'}`}>
          <img src={require('../assets/Home-computer.png')} alt="" />

        </div>
      </div >
      <Galaxy />
    </>
  )
}

export default Home