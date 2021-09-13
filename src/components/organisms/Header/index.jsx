import React from 'react'
import { HeaderFont } from '../../atoms/HeaderFont'
import { useAppProvider } from '../../../services/context'
import './style.scss'

export const Header = ({ children, handleClick }) => {
   const { changeUser } = useAppProvider()

   const handleLogOut = () => {
      changeUser({ token: '', user: null })
   }

   return (
      <header>
         <div className="logOut" onClick={handleLogOut}>Log Out</div>
         <HeaderFont handleClick={handleClick}>{children}</HeaderFont>
      </header>
   )
}
