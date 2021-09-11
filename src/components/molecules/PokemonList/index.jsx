import React from 'react'
import { Pokeball } from '../../atoms/Pokeball'
import './style.scss'

export const PokemonList = () => {
   return (
      <main className="pokemonList">
         <Pokeball />
         <Pokeball />
         <Pokeball />
         <Pokeball />
         <Pokeball />
         <Pokeball />
      </main>
   )
}
