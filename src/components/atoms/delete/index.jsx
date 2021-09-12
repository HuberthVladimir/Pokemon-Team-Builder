import React from 'react'
import DeleteIcon from '../../../assets/Delete.svg'
import './style.scss'
import { useAppProvider } from '../../../services/context'

export const Delete = () => {
   const { isPokeballSelected } = useAppProvider()
   return (
      <img
         className="delete"
         src={DeleteIcon}
         alt="delete icon"
         style={{ filter: isPokeballSelected.isActived ? 'none' : 'saturate(20%)' }}
      />
   )
}
