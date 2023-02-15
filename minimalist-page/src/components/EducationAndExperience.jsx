import React from 'react'
import ox from '../assets/images/oxIsaresi.svg'
import android from '../assets/images/android.svg'
import stack from '../assets/images/stack.svg'
import apple from '../assets/images/apple.svg'
import Fade from 'react-reveal'
const EducationAndExperience = () => {
  return (
    <div className='educationAndExperience-section mt-5'>
      <div className='education-side'>
        <h1>🎓  Education</h1>

        <div className="education">

          <Fade left>
            <div className="education-top">
                <h1>Master In Graphic</h1>
                <img src={ox}/>
            </div>

            <div className="education-bottom">
               <span className='span-1'>New York University</span>
               <span className='span-2'>2014 - 2015</span>
            </div>
          </Fade>
        </div>

        <div className="education">
          <Fade left>
            <div className="education-top">
                <h1>Master In Graphic</h1>
                <img src={ox}/>
            </div>

            <div className="education-bottom">
               <span className='span-1'>New York University</span>
               <span className='span-2'>2015 - 2019</span>
            </div>
          </Fade>
        </div>
         
        <div className="education">
          <Fade left>
            <div className="education-top">
                <h1>Master In Graphic</h1>
                <img src={ox}/>
            </div>

            <div className="education-bottom">
               <span className='span-1'>New York University</span>
               <span className='span-2'>2019 - 2021</span>
            </div>
            </Fade>
        </div>

      </div>

      <div className='experience-side'>
      <h1 className='ps-4'>💼  Experience</h1>
      <div className='experience-section'>

        
       <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="#DAE2FF"/>
<path d="M22.5833 32.5V36.75C22.5833 37.5292 21.9458 38.1667 21.1667 38.1667C20.3875 38.1667 19.75 37.5292 19.75 36.75V32.5H22.5833Z" fill="#305DFF"/>
<path d="M28.25 32.5V36.75C28.25 37.5292 27.6125 38.1667 26.8334 38.1667C26.0542 38.1667 25.4167 37.5292 25.4167 36.75V32.5H28.25Z" fill="#305DFF"/>
<path d="M31.0834 22.5833V29.6667C31.0834 31.225 29.8084 32.5 28.25 32.5H19.75C18.1917 32.5 16.9167 31.225 16.9167 29.6667V22.5833C16.9167 21.025 18.1917 19.75 19.75 19.75H28.25C29.8084 19.75 31.0834 21.025 31.0834 22.5833Z" fill="#305DFF"/>
<path d="M14.0833 22.5833V28.25C14.0833 29.0292 13.4458 29.6667 12.6667 29.6667C11.8875 29.6667 11.25 29.0292 11.25 28.25V22.5833C11.25 21.8042 11.8875 21.1667 12.6667 21.1667C13.4458 21.1667 14.0833 21.8042 14.0833 22.5833Z" fill="#305DFF"/>
<path d="M36.75 22.5833V28.25C36.75 29.0292 36.1125 29.6667 35.3334 29.6667C34.5542 29.6667 33.9167 29.0292 33.9167 28.25V22.5833C33.9167 21.8042 34.5542 21.1667 35.3334 21.1667C36.1125 21.1667 36.75 21.8042 36.75 22.5833Z" fill="#305DFF"/>
<path d="M20.5999 17.7667H27.4C28.6467 17.7667 29.6666 16.7467 29.6666 15.5C29.6666 12.3692 27.1308 9.83334 24 9.83334C20.8691 9.83334 18.3333 12.3692 18.3333 15.5C18.3333 16.7467 19.3533 17.7667 20.5999 17.7667Z" fill="#305DFF"/>
</svg>
      
       <Fade right>
      <div className="experience">
        
        <div className='experience-top'>
         <h1>Android Studio</h1>
         <img src={ox}/>
        </div>
        
        <div className='experience-bottom'>
        <span className='span-1'>Junior Product Designer</span>
        <span className='span-2'>2014 - 2015</span>
        </div>

      </div>
      </Fade>

      </div>

      <div className='experience-section'>
       
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="#FFCCC1"/>
<path d="M27.175 11.35C25.6375 11.35 24.3875 12.6 24.3875 14.1375V19.9375C24.3875 21.475 25.6375 22.725 27.175 22.725C28.7125 22.725 29.9625 21.475 29.9625 19.9375V14.1375C29.9625 12.6125 28.7125 11.35 27.175 11.35Z" fill="#FF6534"/>
<path d="M34.225 17.8875C32.8875 17.8875 31.8001 18.975 31.8001 20.3125V22.275C31.8001 22.5375 32.0126 22.75 32.2751 22.75H34.2376C35.5751 22.75 36.6626 21.6625 36.6626 20.325C36.6626 18.9875 35.5625 17.8875 34.225 17.8875Z" fill="#FF6534"/>
<path d="M19.625 17.7375H13.825C12.2875 17.7375 11.0375 18.9875 11.0375 20.525C11.0375 22.0625 12.2875 23.3125 13.825 23.3125H19.625C21.1625 23.3125 22.4125 22.0625 22.4125 20.525C22.4125 18.9875 21.1625 17.7375 19.625 17.7375Z" fill="#FF6534"/>
<path d="M19.9875 11.025C18.65 11.025 17.5625 12.1125 17.5625 13.45C17.5625 14.7875 18.65 15.875 19.9875 15.875H21.95C22.2125 15.875 22.425 15.6625 22.425 15.4V13.4375C22.4125 12.125 21.325 11.025 19.9875 11.025Z" fill="#FF6534"/>
<path d="M20.7875 25.2875C19.25 25.2875 18 26.5375 18 28.075V33.875C18 35.4125 19.25 36.6625 20.7875 36.6625C22.325 36.6625 23.5751 35.4125 23.5751 33.875V28.075C23.5751 26.5375 22.325 25.2875 20.7875 25.2875Z" fill="#FF6534"/>
<path d="M15.7 25.2875H13.7375C12.4 25.2875 11.3125 26.375 11.3125 27.7125C11.3125 29.05 12.4 30.1375 13.7375 30.1375C15.075 30.1375 16.1625 29.05 16.1625 27.7125V25.75C16.1625 25.5 15.95 25.2875 15.7 25.2875Z" fill="#FF6534"/>
<path d="M34.1376 24.7125H28.3376C26.8001 24.7125 25.5501 25.9625 25.5501 27.5C25.5501 29.0375 26.8001 30.2875 28.3376 30.2875H34.1376C35.6751 30.2875 36.9251 29.0375 36.9251 27.5C36.9251 25.9625 35.6751 24.7125 34.1376 24.7125Z" fill="#FF6534"/>
<path d="M27.975 32.0875H26.0125C25.75 32.0875 25.5375 32.3 25.5375 32.5625V34.525C25.5375 35.8625 26.625 36.95 27.9625 36.95C29.3 36.95 30.3875 35.8625 30.3875 34.525C30.4 33.175 29.3125 32.0875 27.975 32.0875Z" fill="#FF6534"/>
</svg> 
       <Fade right>
    
      <div className="experience">
        
        <div className='experience-top'>
         <h1>Slack</h1>
         <img src={ox}/>
        </div>
        
        <div className='experience-bottom'>
        <span>UI/UX Designer & Developer</span>
        <span>2015 - 2019</span>
        </div>

      </div>

      </Fade>
      </div>

      <div className='experience-section'>
        
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="#D1F7FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.0584 34.1433C34.8942 32.8683 35.2059 32.2167 35.8434 30.7859C31.14 29.0008 30.3892 22.3 35.0359 19.7358C33.6192 17.9508 31.6217 16.9167 29.7375 16.9167C28.3775 16.9167 27.4425 17.2709 26.6067 17.5967C25.8984 17.8659 25.2609 18.1067 24.4675 18.1067C23.6175 18.1067 22.8667 17.8375 22.0734 17.5542C21.2092 17.2425 20.3025 16.9167 19.1692 16.9167C17.0584 16.9167 14.8059 18.2058 13.375 20.4158C11.3634 23.5325 11.7175 29.3692 14.9617 34.3558C16.1234 36.1408 17.6817 38.1383 19.7075 38.1667C20.5575 38.1808 21.11 37.9259 21.7192 37.6567C22.4134 37.345 23.1642 37.005 24.4817 37.005C25.7992 36.9908 26.5359 37.345 27.23 37.6567C27.825 37.9259 28.3634 38.1808 29.1992 38.1667C31.2534 38.1383 32.8967 35.9283 34.0584 34.1433Z" fill="#00BEE6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.44 9.83333C29.6666 11.3917 29.0291 12.9358 28.1933 14.0125C27.3008 15.1742 25.7425 16.0808 24.2408 16.0242C23.9716 14.5225 24.6658 12.9783 25.5158 11.9441C26.465 10.8108 28.0658 9.93249 29.44 9.83333Z" fill="#00BEE6"/>
</svg>

      <Fade right>
    
      <div className="experience">
        
        <div className='experience-top'>
         <h1>Apple</h1>
         <img src={ox}/>
        </div>
        
        <div className='experience-bottom'>
        <span>ios Developer</span>
        <span>2019 - 2021</span>
        </div>

      </div>

      </Fade>
      </div>

      </div>


      
    </div>
  )
}

export default EducationAndExperience