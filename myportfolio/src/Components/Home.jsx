import React, { useEffect } from 'react'
import './css/Home.css'
import Galaxy from './Galaxy'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

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
          <h3
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="10"

            style={{ fontSize: screenWidth <= 425 ? '1.75rem' : '3.5rem' }}>Hi, I'm Tanmay</h3>

          <h3
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"


            style={{ fontSize: screenWidth <= 425 ? '2rem' : '4.5rem' }}>Web Developer</h3>

          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="400"
            data-aos-offset="0"
            style={{
              display: 'flex', flexWrap: 'wrap',
              fontSize: screenWidth <= 425 ? 'o.3rem' : '1.3rem'
            }}>
            I'm a passionate web developer who thrives on learning, coding & Crafting impactful solutions in the virtual realm. <br />
            <span style={{ fontWeight: 'bold', fontSize: screenWidth <= 425 ? 'o.7rem' : '1.4rem', marginTop: screenWidth <= 425 ? '0.2rem' : '0.3rem', }}>Building projects is my jam !🚀</span>
          </p>
          {/* <a href="#">About Me <FaGreaterThan /></a> */}

          <button
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="500"
            data-aos-offset="0"
            id="resume-button" className="button-5" role="button" onClick={openResume}
            style={{
              // backgroundColor: 'white'
            }}> Resume </button>
        </div>

        <div id='HomeImage'
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="1800"
          // className='home-image floating'>
          // className={screenWidth <= 425 ? 'home-image floating' : 'home-image mobile-float'}>
          className={`home-image ${screenWidth <= 375 ? 'mobile-float' : 'floating'}`}>
          <img src={require('../assets/Home-computer.png')} alt="" />
        </div>


      </div >
      <Galaxy />
    </>
  )
}

export default Home