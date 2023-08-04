import * as React from 'react';
import './css/Aboutmain.css'
import Galaxy from './Galaxy';
import AboutContent from './AboutContent';
import Hoodie from './Hoodie';
import javascript from '../assets/SVGIcons/javascript.svg'



export default function NoOppositeContent() {
    return (
        <>
            <div id='about' className='abt-heading' style={{ width: '99%', margin: ' 0 auto' }}>
                <Galaxy />


                {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
                {/* <h1 style={{ color: 'white', fontWeight: '700' }}>About Me..</h1> */}
                <h1 style={{
                    // color: "white",
                    textAlign: "center",
                    // textShadow: "3px 3px #0277BD",
                    fontWeight: "700",
                    // background: "linear-gradient(to bottom right, #FFFFFF 0%, #3C32B0 77%)"
                    // fontSize: "3rem",
                }}>About Me..</h1>
                {/* </div> */}

                <div className='about-main mt-2' >

                    <div className='image-div mt-0'>
                        <img src={require('../assets/SVGIcons/cropped-hacker.png')} alt="Coding image" />
                        {/* image */}
                        {/* <div className='svg-icons'> */}
                        {/* <img src={require('../assets/SVGIcons/google8.png')} alt="google" /> */}
                        {/* <img src={javascript} alt="Javascript" /> */}

                        {/* </div> */}

                        {/* <Hoodie/> */}
                    </div>

                    <div className='about-sub'>
                        {/* <h1 style={{ color: 'white', fontWeight: '700' }}>About Me..</h1> */}
                        {/* <h1  style={{ color: 'white', fontWeight: '700',textShadow: "3px 3px #881ac3" }}>About Me..</h1> */}
                        <AboutContent />
                    </div>
                </div>

            </div>

        </>
    );
}
