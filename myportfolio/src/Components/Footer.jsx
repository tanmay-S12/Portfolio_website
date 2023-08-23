import React from 'react'
import './css/Footer.css'




const Footer = () => {
    const screenWidth = window.innerWidth;



    return (
        <>
            <div id='footer' className='footer-main'>


                <div className='footer-heading'>
                    <h3
                        style={{
                            backgroundColor: 'black',
                            marginBottom: screenWidth <= 425 ? '1rem' : '0rem',
                            paddingTop: screenWidth <= 425 ? '1rem' : '0rem',
                            fontSize: screenWidth <= 425 ? '1.75rem' : '2.7rem'
                        }}
                    >Connect with Me...</h3>
                </div>

                <div className='footer-para'
                    style={{
                        padding: screenWidth <= 425 ? '0' : '',
                        width: screenWidth <= 425 ? '100vw' : '',

                    }}>

                    <p style={{

                        fontSize: screenWidth <= 425 ? '2.3vh' : '2.8vh',
                        paddingRight: screenWidth <= 425 ? '0.5rem' : '2.5rem',
                        paddingLeft: screenWidth <= 425 ? '1rem' : '2.5rem',
                        backgroundColor: 'black',
                        marginBottom: '0',
                        width: screenWidth <= 425 ? '100vw' : '90vw',
                        color: 'white',

                    }}>Whether you're looking for a passionate web developer to join your team or seeking innovative solutions for your projects, I'm here to collaborate and contribute.
                        <br />

                        <p style={{
                            marginTop: '1rem',
                            backgroundColor: 'black',
                            marginBottom: screenWidth <= 425 ? '4rem' : '0'
                        }}>
                            Feel free to drop me a message via email at
                            <a style={{
                                backgroundColor: 'black',
                                textDecoration: 'none',
                                color: '#2c84e9'
                            }} href="mailto:sankpaltanmay893@gmail.com"
                                target="_blank"
                            > sankpaltanmay893@gmail.com</a> or connect with me on
                            <a
                                style={{
                                    backgroundColor: 'black',
                                    textDecoration: 'none',
                                    color: '#2c84e9'
                                }}
                                href="https://www.linkedin.com/in/tanmay-sankpal-a0054b245"
                                target="_blank"
                            > LinkedIn</a>. I'm excited to engage in meaningful conversations, share ideas, and embark on new ventures.
                        </p>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer