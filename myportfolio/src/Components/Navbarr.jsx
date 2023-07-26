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
                    <h3>Tanmay</h3>
                    {/* <LuBug size={35} /> */}
                </div>

                <div className='ham-menu'>
                    <a href="#" onClick={() => setChange(!change)}>
                        <AiOutlineMenu style={{ border: '1px solid white', padding: '2px', borderRadius: '10%' }} />
                    </a>
                </div>

                <div className={
                    change ? "nav-options mobile-nav" : "nav-options"
                }>
                    <ul>

                        <li><NavLink to="/">Home</NavLink> </li>
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Skills">Skills</NavLink></li>
                        <li><NavLink to="/Projects">Projects</NavLink></li>
                        <li><NavLink to="/contact"> contact </NavLink></li>

                    </ul>
                </div>



            </nav>
        </>
    )
}

export default Navbarr