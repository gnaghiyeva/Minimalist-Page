import React from 'react'

//props
const Button = ({buttonDeyeri, icon}) => {
  return (
<a href='' className='my-custom-btn text-white mt-2 me-3'>{icon && <img src={icon}/>} {buttonDeyeri}</a>
  )
}

export default Button