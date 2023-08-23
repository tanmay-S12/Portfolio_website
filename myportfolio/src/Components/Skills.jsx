import Carousel from 'react-multi-carousel';
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'react-multi-carousel/lib/styles.css';
import './css/Skills.css'


const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const screenWidth = window.innerWidth;

    return (
        // zIndex: '700'
        <section

            className="skill mb-5" id="skills" style={{

                background: "transparent", margin: '0 auto',
                color: '#F2F3F4',
                height: screenWidth <= 425 ? "auto" : "80vh",

                // marginTop: screenWidth <= 320 ? "50rem" : "2rem",

                marginTop: screenWidth <= 414 ? "35.2rem" : "2rem",

                // marginTop: screenWidth <= 425 ? "40rem" : "2rem",

                display: 'flex', justifyContent: 'center', alignItems: 'center',
                // border: '2px solid white',
                '@media (max-width: 767px)': { height: 'auto', width: '100%' }
            }} >
            <div>

                {/* paddingTop: '7rem'backgroundColor: '#FF00FF'  border: '2px solid red ', */}
                <div

                    className="container" style={{ background: 'transparent' }}>
                    <div className="row" style={{ background: 'transparent' }}>

                        <div className="col-12" style={{ background: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', '@media (max-width: 767px)': { height: 'auto', width: '100%' } }}>

                            <div
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                className="fs-1 text-center mt-3 " style={{
                                    // color: "White",
                                    marginTop: "1.7rem",
                                    height: "7vh",
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    '@media (max-width: 767px)': { height: 'auto' },
                                    // textShadow: "3px 3px #881ac3",
                                    // textShadow: "3px 3px #0277BD",
                                    fontWeight: "700",
                                    borderRadius: '30px',
                                    background: 'transparent',
                                    // textDecoration: 'underline #0277BD',

                                }}
                            > <h1>Skills</h1>
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-duration="3000"
                                style={{

                                    marginTop: screenWidth <= 425 ? '0.4rem' : '2rem',
                                    // height: "65vh",
                                    height: screenWidth <= 425 ? "auto" : "65vh",
                                    // width: '75vw',
                                    width: screenWidth <= 425 ? "90vw" : "75vw",
                                    border: '3px solid #0277BD',
                                    borderRadius: '30px',
                                    boxShadow: "#0277BD 0px 4px 6px -2px, rgba(0, 0, 0, 0.3) 0px 3px 5px -3px"
                                }} className="skill-bx wow zoomIn " >


                                <div style={{
                                    // zIndex: '99',
                                    borderRadius: '70px',
                                    padding: screenWidth <= 425 ? '0.5rem' : '',
                                    paddingBottom: screenWidth <= 425 ? '0.7rem' : '',
                                    '@media (max-width: 767px)':
                                    {
                                        height: 'auto',
                                        padding: '0',
                                        marginTop: '0',
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }
                                }}>

                                    <p className='' style={{
                                        // border: '2px solid red',
                                        padding: screenWidth <= 425 ? "0.3rem" : "1rem",
                                        height: screenWidth <= 425 ? "auto" : "14vh",
                                        marginTop: '0.3vh',
                                        marginBottom: screenWidth <= 425 ? '0.3vh' : '2rem',
                                        fontWeight: 'normal',
                                        borderRadius: '70px',

                                        fontSize: screenWidth <= 425 ? '2.5vh' : '2.8vh',

                                        //fontSize: screenWidth <= 425 ? '0.4vh' : '2.8vh' '@media (max-width: 767px)': { height: 'auto', padding: "0" },

                                    }}>As a passionate <span style={{ fontWeight: 'bold' }}>MERN stack developer</span>, I boast a strong foundation in utilizing programming languages, software frameworks, design tools, and project management approaches to showcase my expertise and skills.</p>
                                    {/* border: '2px solid pink', */}

                                    {/* border: '3px solid green', */}
                                    <div style={{ display: 'block', borderRadius: '170px' }}>
                                        <Carousel
                                            style={{
                                                margin: '2 rem',
                                                border: '20px solid green',
                                                // zIndex: '99',
                                            }}
                                            responsive={responsive} infinite={true}
                                            autoPlay={true} autoPlaySpeed={1200} className="mt-5 owl-carousel owl-theme skill-slider">

                                            <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }} className="item">

                                                <img width={135} height={135} src={require('../assets/Skill-image/html.png')} alt="Image1" />
                                                <h3 style={{ textDecoration: 'underline #E65100', textDecorationThickness: '3px' }}>Html</h3>

                                            </div>

                                            <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }} className="item">
                                                <img width={135} height={135} src={require('../assets/Skill-image/css.png')} alt="Image1" />
                                                <h3 style={{ textDecoration: 'underline #0277BD', textDecorationThickness: '3px' }}>css</h3>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }} className="item">
                                                <img width={135} height={135} src={require('../assets/Skill-image/js.png')} alt="Image1" />
                                                <h3 style={{ textDecoration: 'underline #FFD600', textDecorationThickness: '3px' }}>Js</h3>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }} className="item">
                                                <img width={135} height={135} src={require('../assets/Skill-image/react.png')} alt="Image1" />
                                                <h3 style={{ textDecoration: 'underline #39C1D7', textDecorationThickness: '3px' }}>React</h3>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }} className="item">
                                                <img width={135} height={135} src={require('../assets/Skill-image/python.png')} alt="Image1" />
                                                <h3 style={{ textDecoration: 'underline #0277BD', textDecorationThickness: '3px' }}>Python</h3>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }} className="item">
                                                <img width={135} height={135} src={require('../assets/Skill-image/java.png')} alt="Image1" />
                                                <h3 style={{ textDecoration: 'underline #0277BD', textDecorationThickness: '3px' }}>Java</h3>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }} className="item">
                                                <img width={135} height={135} src={require('../assets/Skill-image/node.png')} alt="Image1" />
                                                <h3 style={{ textDecoration: 'underline #4CAF50', textDecorationThickness: '3px' }}>Node</h3>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }} className="item">
                                                <img width={135} height={135} src={require('../assets/Skill-image/express.png')} alt="Image1" />
                                                <h3 style={{ textDecoration: 'underline #7C42FF', textDecorationThickness: '3px' }}>Express</h3>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }} className="item">
                                                <img width={135} height={135} src={require('../assets/Skill-image/mongo.png')} alt="Image1" />
                                                <h3 style={{ textDecoration: 'underline #2F7E33', textDecorationThickness: '3px' }}>Mongo DB</h3>
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Skills


// modify the code in such a way that the "Carousal" should not overlap the above "p" tag and highlight where you made changes
