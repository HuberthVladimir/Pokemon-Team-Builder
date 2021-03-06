import React from 'react'
import { useAppProvider } from '../../../services/context'

import { Pokeball } from '../../atoms/Pokeball'
import './style.scss'

export const PokemonList = () => {
   const { savedPokemons } = useAppProvider()
   const pokeballArr = [1, 2, 3, 4, 5, 6]
   //logica para gerar as pokelas mesmo que não estejam setadas pelo usuario
   return (
      <main className="pokemonList">
         {pokeballArr.map((data, index) => {
            return <Pokeball
               index={index}
               key={index}
               image={savedPokemons[index]?.image}
               name={savedPokemons[index]?.name}
               type={savedPokemons[index]?.firstType}
               id={savedPokemons[index]?.id}
            />
         })}
      </main>
   )
}
