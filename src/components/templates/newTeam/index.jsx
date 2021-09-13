import React from 'react'
import { Header } from '../../organisms/Header'
import { CreateTeam } from '../../organisms/CreateTeam'
import { PokemonList } from '../../organisms/PokemonList'
import { useHistory } from 'react-router-dom'

export const NewTeamTemplate = () => {
   const history = useHistory()

   const handleTeams = () => history.push('/teams')

   return (
      <>
         <Header handleClick={handleTeams}>teams</Header>
         <CreateTeam />
         <PokemonList />
      </>
   )
}