import React from 'react'
import './style.scss'
import { Circle } from '../../atoms/circle'
import { Pokemon } from '../../atoms/pokemon'
import { PokemonName } from '../../atoms/pokemonName'
import { BoxTypeColor } from '../../molecules/boxTypeColor'

export const PokemonCard = ({ id, image, name, firstType, secondType }) => {
   return (
      <div className="pokemonCard">
         <Circle>{id}</Circle>
         <Pokemon image={image} />
         <PokemonName>{name.indexOf('-') > -1 ? name.substring(0, name.indexOf("-")) : name}</PokemonName>
         <BoxTypeColor firstType={firstType} secondType={secondType} />
      </div>
   )
}