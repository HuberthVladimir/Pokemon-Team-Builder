import React from 'react'
import { Title } from '../../atoms/title'
import { PokemonList } from '../../molecules/PokemonList'
import './style.scss'

export const MyTeamPokemons = () => {
   return (
      <section className="myTeamsPokemons">
         <Title className="title">Huberth</Title>
         <PokemonList />
      </section>
   )
}
