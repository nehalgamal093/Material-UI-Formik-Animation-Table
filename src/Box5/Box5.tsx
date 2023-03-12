import React, { useState } from 'react'
import {motion,useAnimation} from 'framer-motion'



export default function Box5() {
    const control = useAnimation()

  return (
    <div className='box-container'>
        <button onClick={()=>{control.start({x:1500,transition:{duration:2}})}}>Move to the right</button>
        <button onClick={()=>{control.start({x:0,transition:{duration:1}})}}>Move to the left</button>
        <button onClick={()=>{control.start({borderRadius:'50%',transition:{duration:1}})}}>Circle</button>
        <button>Square</button>
        <button onClick={()=>{control.stop()}}>Stop</button>
        <motion.div
         className='box'
            animate={control}
         ></motion.div>
    </div>
  )
}
