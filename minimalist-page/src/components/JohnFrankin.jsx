import React from 'react'
import cutDirnaq from '../assets/images/cutDirnaq.svg'
import previous from '../assets/images/previous.svg'
import next from '../assets/images/next.svg'
import client1 from '../assets/images/client-1.svg'
import client2 from '../assets/images/client-2.svg'
import client3 from '../assets/images/client-3.svg'
import client4 from '../assets/images/client-4.svg'
import client5 from '../assets/images/client-5.svg'
import { Bounce } from 'react-reveal'
import { Zoom } from 'react-reveal'

const JohnFrankin = () => {
  return (
    <div className='john-frankin row mt-5 text-center'>
        <div className='frankin-top'>
            <img src={cutDirnaq}/>
            <h5 className='pt-3'>John Frankin</h5>
            <span>UI/UX Designer</span>
        </div>


        <div className='frankin-center row '>
            <div className='center-left t col-12 col-md-2 pt-4'>
                <img src={previous}/>
            </div>

            <div className='center-center col-12 col-md-8 '>
            <Zoom top>
            <span>“Sinthi has helped our business deliver incredible<br/> results, leading success for our UI & UX
                   Lorem ipsum<br/> dolor sit amet, consectetur adipiscing elit. Sed <br/> semper, sapien sit amet 
                   scelerisque laoreet, eros<br/> justo congue neque”</span>
            </Zoom>
            </div>
            
            <div className='center-center col-12 col-md-2 pt-4'>
            <img src={next}/>
            </div>
        </div>

        <div className='franking-bottom pt-5 ps-5'>
            
        <Bounce top><img src={client1}/></Bounce>
        <Bounce bottom><img src={client2}/></Bounce>
        <Bounce top><img src={client3}/></Bounce>
        <Bounce bottom><img src={client4}/></Bounce>
        <Bounce top><img src={client5}/></Bounce>
        </div>

    </div>
  )
}

export default JohnFrankin