import React from 'react'
import './style.scss'

export const Circle = (props) => {
   return (
      <div className="circle">
         <span>#{props.children}</span>
      </div>
   )
}
