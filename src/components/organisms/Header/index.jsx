import React from 'react'
import { HeaderFont } from '../../atoms/HeaderFont'
import './style.scss'

export const Header = ({ children, handleClick }) => {
   return (
      <header>
         <HeaderFont handleClick={handleClick}>{children}</HeaderFont>
      </header>
   )
}
