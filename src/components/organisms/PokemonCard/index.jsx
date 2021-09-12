import React, { useContext } from 'react'
import './style.scss'
import { Circle } from '../../atoms/circle'
import { Pokemon } from '../../atoms/pokemon'
import { PokemonName } from '../../atoms/pokemonName'
import { BoxTypeColor } from '../../molecules/boxTypeColor'
import UseAppGlobalContext from '../../../services/context'

export const PokemonCard = ({ id, image, name, firstType, secondType }) => {
   const { savedPokemons } = useContext(UseAppGlobalContext)

   const handleCardClick = () => {
      const alreadyExist = savedPokemons.map(data => data.name.includes(name))
      const objPokemon = { id, name, firstType }

      if (alreadyExist.includes(true)) {
         alert('You arealdy take that pokemon')
      } else if (savedPokemons.length >= 6) {
         alert(`You party it's alrady full`)
      } else {
         savedPokemons.push(objPokemon)
      }
   }

   return (
      <div className="pokemonCard"
         onClick={handleCardClick}
      >
         <Circle>{id}</Circle>
         <Pokemon image={image} />
         <PokemonName>{name.indexOf('-') > -1 ? name.substring(0, name.indexOf("-")) : name}</PokemonName>
         <BoxTypeColor firstType={firstType} secondType={secondType} />
      </div>
   )
}