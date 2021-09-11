import React from 'react'
import './style.scss'
import { Circle } from '../../atoms/circle'
import { Pokemon } from '../../atoms/pokemon'
import { PokemonName } from '../../atoms/pokemonName'
import { BoxTypeColor } from '../../molecules/boxTypeColor'

export const PokemonCard = (prosp) => {
   return (
      <div className="pokemonCard">
         <Circle>1</Circle>
         <Pokemon image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" />
         <PokemonName>Bulbasaur</PokemonName>
         <BoxTypeColor firstType="grass" secondType="poison" />
      </div>
   )
}
