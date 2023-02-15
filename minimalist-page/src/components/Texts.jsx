import React from 'react'
import LightSpeed from 'react-reveal'
import Bounce from 'react-reveal'

const texts = () => {
  return (
    <div className='texts-sections'>
        <h1 className='text1 text-center'>
        <LightSpeed top cascade>
            Let Me know if You Want to Talk </LightSpeed>
            <LightSpeed top cascade>About Your Project.</LightSpeed>
        </h1>

        <h1 className='text2 text-center'>
          <LightSpeed top cascade>We’re Available for Freelance Work.</LightSpeed>
        </h1>
        
        <div className='lets-design-section text-center'>
        <h1 className='text3 pt-5'>
         Let’s Design Your Website
        </h1>
        <svg className='icon' width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M5 24.9998L25.3523 4.64746" stroke="#FF694B" stroke-width="6" stroke-linecap="square" stroke-linejoin="round"/>
       <path d="M6.88971 3L27.242 3L27.242 23.3523" stroke="#FF694B" stroke-width="6" stroke-linecap="square" stroke-linejoin="round"/>
       </svg>

        </div>
    </div>
  )
}

export default texts