import React from 'react'
import { Header } from '../../organisms/Header'
import { CreateTeam } from '../../organisms/CreateTeam'
import { PokemonList } from '../../organisms/PokemonList'

export const NewTeamTemplate = () => {
   return (
      <>
         <Header>teams</Header>
         <CreateTeam />
         <PokemonList />
      </>
   )
}
