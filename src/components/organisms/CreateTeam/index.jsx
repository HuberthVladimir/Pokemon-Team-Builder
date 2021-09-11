import React from 'react'
import './styles.scss'
import { TeamInput } from '../../molecules/teamInput'
import { PokemonList } from '../../molecules/PokemonList'
import { ConfigButtons } from '../../molecules/configButtons'

export const CreateTeam = () => {
   return (
      <section id="createTeamPokemon">
         <TeamInput />
         <PokemonList />
         <ConfigButtons />
      </section>
   )
}
