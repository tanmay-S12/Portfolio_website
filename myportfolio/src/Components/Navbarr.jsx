import React, { useState } from 'react'
import './css/Navbarr.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { LuBug } from 'react-icons/lu'

const Navbarr = () => {

    const [change, setChange] = useState(false)


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
                        fontSize: '2.5rem'
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

                        <li > <a className='grow' href="#Home">Home</a> </li>
                        <li > <a className='grow' href="#about">About</a></li>
                        <li ><a className='grow' href="#skills">Skills</a></li>
                        <li > <a className='grow' href="#projects">Projects</a></li>
                        <li > <a className='grow' href="#contact">Contact</a></li>


                    </ul>
                </div>



            </nav >
        </>
    )
}

export default Navbarr