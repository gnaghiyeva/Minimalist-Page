import React from 'react'
import PD from '../assets/images/productDesign.svg'
import UI from '../assets/images/uiDesign.svg'
import Bounce from 'react-reveal/Bounce'
import Jello from 'react-reveal'
const ProductDesign = () => {
  return (
    <div className='productDesign-section row mt-5 pt-5'>
    
    <div className='left-side-productDesign col-12 col-md-6'>
        <h6 className='pt-4 ps-4'>Product Design</h6>
        <Bounce left>
        <p className='pt-4 ps-4'>Payment Solutions<br/>
           Mobile App UI<br/>
           Interface Design</p>
        </Bounce>
        <Jello>
     <img src={PD} className="w-100 px-4 pt-3"/>
       </Jello>
    </div>

    <div className='right-side-productDesign col-12 col-md-6 bg-primary'>
        <h6 className='pt-4 ps-4'>UI/UX Design</h6>
        <Bounce right>
        <p className='pt-4 ps-4'>Responsive<br/>
           WordPress Theme<br/>
           UI Design</p>
        </Bounce>
        <Jello>
           <img src={UI} className="w-100 px-4 pt-3"/>
        </Jello>
    </div>

    </div>


  )
}

export default ProductDesign