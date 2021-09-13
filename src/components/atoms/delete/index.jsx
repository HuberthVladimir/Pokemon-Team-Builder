import React from 'react'
import DeleteIcon from '../../../assets/Delete.svg'
import './style.scss'
import { useAppProvider } from '../../../services/context'

export const Delete = () => {
   const { isPokeballSelected, savedPokemons, setSavedPokemons, actualPokemonSelected } = useAppProvider()

   const handleDeleteClick = () => {
      const positionPokemon = savedPokemons.filter(data => data.name !== actualPokemonSelected)
      setSavedPokemons(positionPokemon)
   }

   return (
      <img
         className="delete"
         src={DeleteIcon}
         alt="delete icon"
         onClick={handleDeleteClick}
         style={{ filter: isPokeballSelected.isActived ? (savedPokemons.length < 1 ? 'saturate(20%)' : 'none') : 'saturate(20%' }}
      />
   )
}