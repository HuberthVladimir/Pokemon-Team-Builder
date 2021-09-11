import React from 'react'
import './style.scss'
import { TypeColor } from '../../atoms/typeColor'

export const BoxTypeColor = ({ firstType, secondType }) => {
   return (
      <div className="typeColorsBox">
         <TypeColor type={firstType} />
         <TypeColor type={secondType} />
      </div>
   )
}
