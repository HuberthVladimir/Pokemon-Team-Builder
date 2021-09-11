import React from 'react'
import './styles.scss'
import { TeamInput } from '../../molecules/teamInput'
import { Pokeball } from '../../molecules/Pokeball'

export const CreateTeam = () => {
   return (
      <section id="createTeamPokemon">
         <TeamInput />
         <Pokeball />
      </section>
   )
}
