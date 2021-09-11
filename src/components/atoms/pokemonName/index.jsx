import React from 'react'

export const PokemonName = (props) => {
   return (
      <p className="pokemonName">
         {props.children}
      </p>
   )
}
