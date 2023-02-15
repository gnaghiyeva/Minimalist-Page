import React from 'react'
import blog1 from '../assets/images/blog1.svg'
import blog2 from '../assets/images/blog2.svg'
import blog3 from '../assets/images/blog3.svg'
import Rotate from 'react-reveal'
const BlogNews = () => {
  return (
    <div className='blogNews-section mt-5'>
        <h5 className='text-center'>Blog & News</h5>
        
        <div className='photos'>
        <Rotate bottom left> <img className='blog1' src={blog1}/> </Rotate>
        <Rotate top><img className='blog2' src={blog2}/></Rotate>
        <Rotate bottom right> <img className='blog3' src={blog3}/></Rotate>
        </div>
    </div>
  )
}

export default BlogNews