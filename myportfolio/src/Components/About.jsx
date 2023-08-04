import * as React from 'react';
import './css/Aboutmain.css'
import Galaxy from './Galaxy';
import AboutContent from './AboutContent';
// This is the main About Section in which some content is rendered from <AboutContent>
export default function NoOppositeContent() {
    return (
        <>

            <div id='about' className='abt-heading' style={{ width: '99%', margin: ' 0 auto' }}>
                <Galaxy />

                <h1 style={{
                    textAlign: "center",
                    fontWeight: "700",
                }}>About Me..</h1>
                <div className='about-main mt-2' >
                    <div className='image-div mt-0'>
                        <img src={require('../assets/SVGIcons/cropped-hacker.png')} alt="Coding image" />
                    </div>
                    <div className='about-sub'>
                        <AboutContent />
                    </div>
                </div>
            </div>








        </>
    );
}



// color: "white",
// color: "white",
// color: "white",
// background: "linear-gradient(to bottom right, #FFFFFF 0%, #3C32B0 77%)"
// fontSize: "3rem",
{/* <div style={{ display: 'flex', alignItems: 'center' }}> */ }
{/* <h1 style={{ color: 'white', fontWeight: '700' }}>About Me..</h1> */ }

{/* image */ }
{/* <div className='svg-icons'> */ }
{/* <img src={require('../assets/SVGIcons/google8.png')} alt="google" /> */ }
{/* <img src={javascript} alt="Javascript" /> */ }

{/* </div> */ }

{/* <Hoodie/> */ }
{/* <h1 style={{ color: 'white', fontWeight: '700' }}>About Me..</h1> */ }
{/* <h1  style={{ color: 'white', fontWeight: '700',textShadow: "3px 3px #881ac3" }}>About Me..</h1> */ }