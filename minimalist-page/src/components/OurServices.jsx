import React from 'react'
import UED from '../assets/images/userExperienceDesign.svg'
import BS from '../assets/images/businessStrategy.svg'
import WD from '../assets/images/WebDesign.svg'
import MD from '../assets/images/MobileDesign.svg'
import DM from '../assets/images/DigitalMarketing.svg'
import FT from '../assets/images/FrontDeveloper.svg'
import Bounce, { LightSpeed } from 'react-reveal'

import Button from './Button'
const OurServices = () => {
  return (
    <div className='ourServices-section row mt-5 pt-5 bg-light' >
        <h1 className='basliq text-center'>Our Services</h1>
        <div className='services-section-left bg-light col-12 col-md-4 ps-4'>
            
          <Bounce bottom>
            <div>
          <img className='UED' src={UED}/>
          </div>
          <div>
          <img className='BS' src={BS}/>
          </div>
          </Bounce>
        </div>

        <div className='services-section-center bg-light col-12 col-md-4 ps-4'>
            
          <Bounce bottom>
          <div>
          <img className='WD' src={WD}/>
          </div>
          <div>
          <img className='MD' src={MD}/>
          </div>
          </Bounce>
        </div>


        <div className='services-section-right bg-light col-12 col-md-4 ps-4 '>
        <Bounce bottom>
        <div>
        <img className='DM' src={DM}/>
        </div>
        <div>
        <img className='FT' src={FT}/>
        </div>
        </Bounce>
        </div>

        <div className="button-groups mt-3 text-center">
        <LightSpeed bottom>
        <Button buttonDeyeri="Explore Services" />
        </LightSpeed>
       
      </div>
    </div>
  )
}

export default OurServices