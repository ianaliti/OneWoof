import React from 'react'
import classes from './MyMainButton.module.css'

const MyMainButton = ({ children, ...props }) => {
  return (
    <div className='productButton'>
         <button {...props} className={classes.myBtn} >{children}</button>
    </div>
  )
}

export default MyMainButton