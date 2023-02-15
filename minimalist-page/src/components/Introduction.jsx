import React from 'react'
import IntroductionImg from '../assets/images/introduction.svg'
import IntroductionIcon from '../assets/images/iconOx.svg'
import { Controller, Scene } from 'react-scrollmagic'
import {Rotate} from 'react-reveal'
import {Fade} from 'react-reveal'
import {Zoom} from 'react-reveal'
// import IntroductionImgLine from '../assets/images/line.svg'
 


const Introduction = () => {
  return (

    <div className='introduction row'>
      
      {/* <div id='line' className='right-side  col-12 col-md-6  d-flex justify-content-end'>
        <img src={IntroductionImgLine} className="w-100"/>
      </div> */}
      <div className='left-side  col-12 col-md-4'>
        <h5 className='ps-2'>UI/UX Designer & Developer</h5>
        
        <h1>
          <Zoom left cascade>
          We’re Creative & Minimalist
          </Zoom>
          </h1>
        

        <Fade left>
        <p className='p-1 ps-2'>Hi, I’m Sinthi. I’m UI/UX Designer. If you <br/>are looking for Designer to build your<br/> brands and grow your business Let’s<br/> shake hands with me.</p>
        <img src={IntroductionIcon} id="iconOx" className="w-5"/>
        <p className='hire'>Hire Me Now</p>
        <p className='proud'>We proudly working with Microsoft</p>
        </Fade>
      </div>


      <div className='right-side col-12 col-md-5  d-flex justify-content-start '>
        <Rotate>
        <img src={IntroductionImg} className="w-100"/>
        </Rotate>
      </div>
       
      <div className='right-side-right  col-12 col-md-3   align-text-bottom '>
      {/* <svg width="35" height="1" viewBox="0 0 35 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="0.5" x2="35" y2="0.5" stroke="#757683"/>
      </svg> */}
        <Fade right>
        <span className='span-1 ps-4' >Our Projects</span>
        
        <h4>Portfolio Landing UI</h4>
        <h6>Microsoft</h6>
        <a href='#' className='span-2'>Explore Now</a>
        </Fade>
      </div>


     
      <div>

      </div>
      


    </div>
  )
}

export default Introduction