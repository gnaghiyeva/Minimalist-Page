import React, { useRef } from 'react'
import {GiCrossMark} from 'react-icons/gi'
import {AiOutlineBars} from 'react-icons/ai'
import logo from '../assets/images/logo.svg'
import Button from './Button'
import Flip from 'react-reveal'
import Pulse from 'react-reveal'



//import overlay

const Navbar = () => {

  const overlayMenuRef = useRef()
  function openOverlayMenu(e){
     const kliklediyimYer=e.target

     if(kliklediyimYer.classList.contains('bars-icon')){
      // alert("sjsjsj")

      overlayMenuRef.current.classList.add('aktiv')
     }

     
  }



  function closeOverlayMenu(e){
    const kliklediyimYer = e.target

    if(kliklediyimYer.classList.contains('cross-icon')){
      overlayMenuRef.current.classList.remove('aktiv')
     }
  }
    //current obyekt
    
  return (
    <>

<div className='overlay' ref={overlayMenuRef} >
        <GiCrossMark className='cross-icon' onClick={closeOverlayMenu}/>
        

        <div className='nav-links'>
            <a href=''>Start</a>
            <a href=''>Services</a>
            <a href=''>Portfolio</a>
            <a href=''>News</a>
            <a href=''>Contact</a>
        </div>
    </div>


<Flip top>
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={openOverlayMenu}>
      <AiOutlineBars className='bars-icon'/>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 mt-2 ms-5">
        <li className="nav-item">
          <a id='start' className="nav-link" aria-current="page" href="#">Start</a>
        </li>
         
        <li className="nav-item">
          <a className="nav-link " href="#">Services</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="#">News</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        
      </ul>
      
     
    <Button buttonDeyeri = "Book A Call"/>
     
    </div>
  </div>
</nav>
</Flip>
</>
  )
}

export default Navbar