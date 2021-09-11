import React from 'react'
import { Header } from '../../organisms/Header'
import { CreateTeam } from '../../organisms/CreateTeam'
import { PokemonCard } from '../../organisms/PokemonCard'

export const NewTeamTemplate = () => {
   return (
      <>
         <Header>teams</Header>
         <CreateTeam />
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
         </div>
      </>
   )
}
