import React, { useState } from 'react'
import './css/Navbarr.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'
// import { HashLink as Link } from 'react-router-hash-link'
// import { NavLink } from 'react-router-dom';
// import { LuBug } from 'react-icons/lu'

const Navbarr = () => {



    const [change, setChange] = useState(false);
    const screenWidth = window.innerWidth;
    const openResume = () => {
        // Replace with your actual URL
        const resumeUrl = '';
        window.open(resumeUrl, '_blank');
    }
    return (
        <>
            <nav className='main-nav'>

                <div className='nav-logo'>
                    {/* <LuBug size={35} /> */}
                    {/* <h3 style={{ textShadow: "3px 3px #0277BD" }}>Tanmay</h3> */}
                    <h3 style={{
                        fontWeight: 'bolder',
                        background: '#FFFFFF',
                        background: 'linear-gradient(to bottom right, #FFFFFF 20%, #3C32B0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        // fontSize: '2.5rem'
                        fontSize: screenWidth <= 320 ? '1.7rem' : '2.5rem',
                    }}>Tanmay</h3>

                    {/* textShadow: "3px 3px #881ac3" */}

                </div>

                <div className='ham-menu'>
                    <a href="#" onClick={() => setChange(!change)}>
                        <AiOutlineMenu style={{ border: '1px solid white', padding: '2px', borderRadius: '10%' }} />
                    </a>
                </div>

                <div className={
                    change ? "mobile-nav nav-options" : "nav-options"
                }>
                    <ul className='grow2' >

                        <li className='grow' > <Link to="home" spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
                        <li className='grow' > <Link to="about" spy={true} smooth={true} offset={-36} duration={500}>About</Link></li>
                        <li className='grow' > <Link to="skills" spy={true} smooth={true} offset={-86} duration={500}>Skills</Link></li>
                        <li className='grow' > <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                        <li className='grow' > <Link to="footer" spy={true} smooth={true} offset={50} duration={1100}>Contact</Link> </li>
                        {/* <button style={{ backgroundColor: 'red' }}>MY Resume</button> */}
                        <button

                            id="resume-button" className="button-5" role="button" onClick={openResume}
                            style={{
                                // backgroundColor: 'white'
                            }}> Resume </button>

                    </ul>
                </div>



            </nav >
        </>
    )
}

export default Navbarr



{/* <li > <a className='grow' href="#Home">Home</a> </li>
<li > <a className='grow' href="#about">About</a></li>
<li ><a className='grow' href="#skills">Skills</a></li>
<li > <a className='grow' href="#projects">Projects</a></li>
<li > <a className='grow' href="#contact">Contact</a></li> */}