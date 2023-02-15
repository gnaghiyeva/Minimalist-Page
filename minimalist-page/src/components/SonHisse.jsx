import React from 'react'
import FooterLogo from '../assets/images/footerLogo.svg'
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import dribble from '../assets/images/dribble.svg'
import linkedin from '../assets/images/linkedin.svg'
import Zoom from 'react-reveal'
import { Fade } from 'react-reveal'
const SonHisse = () => {
  return (

    <div className='footer row pt-5 bg-light'>
    
        <div className='footer-top  row-12 row-md-4 text-center '>
        <img className='flogo' src={FooterLogo}/>
        
        
        <h2 className='h2 pt-5'><Zoom bottom>
          Lets Talk with Me!</Zoom>
        </h2>
        
        <span>I am always open to discuss your project, improve your<br/>
         online presence or help with your UX/UI design</span>
        </div>

        <div className='footer-center  row-12 row-md-4 text-center pt-3 '>
       
         <a href='https://www.facebook.com/login/'> <Fade bottom big><img src={facebook}/></Fade></a>
         <a href='https://twitter.com/i/flow/login'><Fade top big ><img src={twitter}/></Fade></a>
         <a href='https://dribbble.com/'><Fade bottom big><img src={dribble}/></Fade></a>
         <a href='https://www.linkedin.com/'><Fade top big><img src={linkedin}/></Fade></a>
        </div>

        <div className='footer-bottom  row-12 row-md-4 pt-4 mb-5 '>
        
        <div className='footer-bottom-left ps-5 text-center col-12 col-md-6'>
        <a href=''>Start</a>
        <a href=''>Services</a>
        <a href=''>Portfolio</a>
        <a href=''>News</a>
        <a href=''>Contact</a>
        </div>

        <div className='footer-bottom-right pe-5'>
        <svg className='gmail-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#757683" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 6L12 13L2 6" stroke="#757683" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <a className='gmail'><span>inventiveshamim@gmai.com</span></a>

        </div>

       </div>



    </div>
  )
}

export default SonHisse