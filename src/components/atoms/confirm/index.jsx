import React from 'react'
import ConfirmIcon from '../../../assets/Confirm.svg'
import './style.scss'
import { useAppProvider } from '../../../services/context'

export const Confirm = () => {
   const { savedPokemons, inputText } = useAppProvider()

   const handleSubmit = () => {
      if (savedPokemons.length === 6) {
         console.log(inputText, savedPokemons)
      }
   }

   return (
      <img
         className="confirm"
         src={ConfirmIcon}
         alt="delete icon"
         style={{ filter: savedPokemons.length === 6 ? 'none' : 'saturate(50%)' }}
         onClick={handleSubmit}
      />
   )
}