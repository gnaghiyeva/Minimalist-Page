import React from 'react'
import SC from '../assets/images/smallClient.svg'
import One from '../assets/images/one.svg'
import Two from '../assets/images/two.svg'
import Bounce from 'react-reveal'
import Fade from 'react-reveal'
import Rotate from 'react-reveal'
import Slide from 'react-reveal'
const SmallClients = () => {
  return (
    <div className='SmallClients-section row mt-5 pt-4'>

        <div className='left-side  col-12 col-md-6 '>
          <Fade left>
            <img src={SC} className="w-100"/>
          </Fade>
        </div>

        <div className='right-side  col-12 col-md-6 '>
           <Bounce left cascade>
           <h1 className='pt-5 '>
            
            From Big to Small Clients,<br/>
               Two Things I Always Promise
               </h1> 
          </Bounce>
             
               <br/>
            
            <div className='right-side-left'>
              
            <img src={One} className='pt-4'/>
            <Slide top>
            <h6>Design You Will Love</h6>
            <p className=' donec-metuse ps-5'>Donec metuse, vulputate at sapiens <br/> sit amet, auctor iaculis lorem. In the<br/> hendrerit nisi.</p>
            </Slide>
            </div>

            <div className='right-side-right'>
            
            <img src={Two} className='pt-4'/>
            <Slide top>
            <h6>Friendly Relationship</h6>
            <p className=' donec-metuse ml-1'>Donec metuse, vulputate at sapiens <br/> sit amet, auctor iaculis lorem. In the<br/> hendrerit nisi.</p>
            </Slide>
            </div>

           <br/><br/>

            <div className='right-side-bottomOne ps-3'>
              <Rotate bottom left>
             <h1>8</h1>
             </Rotate>
             <p className='experience ps-3'>Years<br/>Experience</p>
            </div>

            <div className='right-side-bottomTwo ps-5'>
              <Rotate bottom left>
            <h1>69</h1>
             </Rotate>
             <p className='experience ps-3'>Satisfied<br/>Clients</p>
            </div >

            <div className='right-side-bottomThree ps-5'>
              <Rotate bottom left>
            <h1>207</h1>
             </Rotate>
             <p className='experience ps-3'>Projects<br/>Completed</p>
            </div>

        </div>
    </div>
  )
}

export default SmallClients