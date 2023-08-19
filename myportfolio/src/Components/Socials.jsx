import React from 'react'
import './css/Socials.css'




const Socials = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/tanmay-sankpal-a0054b245';
  const githubUrl = 'https://github.com/tanmay-S12';
  // const gmailUrl = '';
  const twitterUrl = 'https://twitter.com/TanmaySankpal1';


  return (
    <>
      <div className='socials-main'>

        <div style={{ background: 'transparent' }}>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/Footerimg/flinkedin.png')} alt="linekdin" />
          </a>
        </div>

        <div style={{ background: 'transparent' }}>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/Footerimg/ftwitter.png')} alt="Twitter" />
          </a>
        </div>
        <div style={{ background: 'transparent' }}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/Footerimg/fgithub.png')} alt="GitHub" />
          </a>
        </div>
        <div style={{ background: 'transparent' }}>
          <a href="mailto:sankpaltanmay893@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/Footerimg/fgmail.png')} alt="Gmail" />
          </a>
        </div>
        {/* <div><img src={require('../assets/Footerimg/flinkedin.png')} alt="linekdin"/></div> */}
      </div>
    </>
  )
}

export default Socials