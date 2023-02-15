import React from 'react'
import Button from './Button'
import computer from '../assets/images/computer.svg'
import Roll, { LightSpeed } from 'react-reveal'
import { Slide } from 'react-reveal'
const ContactUs = () => {
  return (
    <div className='contact-section row mt-5'>
        <div className='left-side col-12 col-md-5'>
          <Roll top>
          <img className='computer ms-5' src={computer}/>
          </Roll>
        </div>

        <div className='right-side  col-12 col-md-7 '>
        <br/>
        <br/>
        <Slide top cascade>
         <h1 className='mt-5'>Have Any Project in Mind?</h1>
         </Slide>
         <Slide top cascade>
         <h1 className='h1-2'>Don’t Be Hesitate to Contact Us</h1><br/>
         </Slide>
         <p>Ready to make something kickass? Let's get on a call.</p><br/>
          <LightSpeed top>
         <Button buttonDeyeri="Get In Touch" />
          </LightSpeed>

        </div>
    </div>
  )
}

export default ContactUs